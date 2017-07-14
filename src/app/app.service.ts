import * as fetchJsonp from 'fetch-jsonp';
import * as moment from 'moment';
import * as async from 'async';
import * as VK from 'vk-openapi';
import { Component, OnInit, Injectable } from '@angular/core';

moment.locale('ru');

VK.init({apiId: 6099251});

@Injectable()
export class AppService implements OnInit {
    myVK = null;
    state = {
        isGettingPosts: false,
        isCheckingLikes: false
    }

    ngOnInit() {}

    getApi() {
        return VK;
    }

    execute({user_access_token, code}) {
        return new Promise((resolve, reject) => {
            VK.Api.call('execute', {code: code}, (response) => {
                resolve(response);
            })
        });
    }

    bundleQuery(method, posts?, user_id?, owner_id?) {
        switch (method) {
            case 'likes.isLiked':
                return(`return[${posts.map((post) =>
                    `API.${method}({user_id:${user_id},owner_id:${owner_id},type:"post",item_id:${post.id},v:5.65})`).toString()}];`
                );
        }
    }

    getUserData({user_id, user_access_token}) {
        const url = `
            https://api.vk.com/api.php?
                oauth=1&
                method=users.get&
                user_ids=${user_id}&
                name_case=Nom&
                fields=photo_50,online&
                access_token=${user_access_token}`
                .replace(/ /g, '')
                .replace(/\n/g, '');

        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => response)
                .catch( ex => console.log('parsing failed', ex) );
    };

    getUserGroups({user_id, user_access_token, count, offset = 0}) {
        const url = `
        https://api.vk.com/api.php?
            oauth=1&
            extended=1&
            method=groups.get&
            user_id=${user_id}&
            offset=${offset}&
            count=${count}&
            access_token=${user_access_token}`
                .replace(/ /g, '')
                .replace(/\n/g, '');

        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                    if (response) {
                      const [available, ...groups] = response;
                      return {available, groups};
                    }
                    return null;
                  })
                .catch( ex => console.log('parsing failed', ex) );
    };

    getWallPosts({owner_id, user_access_token, count, offset}) {
        const url = `
        https://api.vk.com/api.php?
            oauth=1&
            method=wall.get&
            owner_id=${owner_id}&
            offset=${offset}&
            count=${count}&
            filter=all&
            access_token=${user_access_token}`
                .replace(/ /g, '')
                .replace(/\n/g, '');

        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                            if (response) {
                                const [available, ...posts] = response;
                                return {available, posts};
                            }
                            return null;
                        })
                .catch( ex => console.log('parsing failed', ex) );
    };

    isLiked({user_id, type = 'post', owner_id, item_id, user_access_token}) {
        const url = `
        https://api.vk.com/api.php?
            oauth=1&
            method=likes.isLiked&v=5.65&
            user_id=${user_id}&
            type=${type}&
            owner_id=${owner_id}&
            item_id=${item_id}&
            access_token=${user_access_token}
            `.replace(/ /g, '')
             .replace(/\n/g, '');

        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                            return response;
                        })
                .catch( ex => console.log('parsing failed', ex) );
    };

    formatPost(post, response) {
      post.text = post.text.replace(/<br\s*\/?>/gi, ' ');
      post.date = moment(post.date * 1000).format('LL');
      post.reposted = response.copied;
      return post;
    }

    apiQuery(count, apiQueryCallback, httpRequest, maxPerRequest = 100) {
        const
          maxRPS = 3,
          offsetsCount = Math.ceil(count / maxPerRequest),
          offsets = Array.apply(null, Array(offsetsCount)).map(function(_, i) { return i * maxPerRequest});

        let results = [];

        const queue = async.queue(function (offset, callback) {
          return httpRequest(offset)
                  .then((result) => {
                    results = results.concat(result);
                    return callback();
                  });
        }, maxRPS);

        async.eachLimit(
            offsets,
            maxRPS,
            function (offset, callback) {
              queue.push(offset, (err) => {
                if (err) {
                  console.log(err);
                }
              });
              setTimeout(callback, 1000);
            },
            function() {
              if (!queue.running()) {
                  apiQueryCallback(results);
              } else {
                  queue.drain = function() {
                    return apiQueryCallback(results);
                  }
              }
            }
        );
    };

    getAllLikedPosts({owner_id, user_id, user_access_token, posts}) {
        this.state.isCheckingLikes = true;
        const bundle = this.bundleQuery('likes.isLiked', posts, user_id, owner_id);
        return this.execute({user_access_token, code: bundle})
            .then((likes: any) => {
                return likes.response;
            })
    }

    getAllWallPosts({owner_id, user_id, user_access_token, count}) {
        this.state.isGettingPosts = true;

        const httpRequest = (offset) => {
          return this.getWallPosts({
                        owner_id: owner_id,
                        count: ((count - offset) < 100) ? (count - offset) : 100,
                        user_access_token: user_access_token,
                        offset: offset })
                      .then((response: any) => {
                        return response.posts;
                      })
          }

        return new Promise((resolve, reject) => {
          this.apiQuery(count, (results: any) => {
            this.state.isGettingPosts = false;
            resolve(results);
          }, httpRequest);
        });
      }
}
