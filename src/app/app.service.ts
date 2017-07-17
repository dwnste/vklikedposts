import * as moment from 'moment';
import * as async from 'async';
import * as VK from 'vk-openapi';
import { Component, Injectable } from '@angular/core';

const API_VERSION = 5.67;

moment.locale('ru');

VK.init({apiId: 6099251});

@Injectable()
export class AppService {
    state = {
        isGettingPosts: false,
    }

    getUserData({user_id, user_access_token}) {
      return new Promise((resolve, reject) => {
        VK.Api.call('users.get', {
          user_ids: user_id,
          name_case: 'Nom',
          fields: 'photo_50,online',
          version: API_VERSION,
          access_token: user_access_token}, (data) => {
            resolve(data.response);
          });
      });
    }

    getUserGroups({user_id, user_access_token, count, offset = 0}) {
      return new Promise((resolve, reject) => {
        VK.Api.call('groups.get', {
          extended: '1',
          user_id,
          offset,
          count,
          v: API_VERSION,
          access_token: user_access_token}, (data) => {
            resolve(data.response);
          });
      });
    }

    getWallPosts({owner_id, user_access_token, count, offset}) {
      return new Promise((resolve, reject) => {
        VK.Api.call('wall.get', {
          owner_id,
          offset,
          count,
          v: API_VERSION,
          access_token: user_access_token}, (data) => {
            resolve(data.response);
          });
      });
    };

    execute({user_access_token, code}) {
      return new Promise((resolve, reject) => {
        VK.Api.call('execute', {code: code}, (response) => {
          resolve(response);
        })
      });
    }

    bundleQuery(method: string, posts?: Array<any>, user_id?, owner_id?) {
      switch (method) {
        case 'likes.isLiked':
          return(`return[${posts.map((post) =>
              `API.${method}({user_id:${user_id},owner_id:${owner_id},type:"post",item_id:${post.id},v:${API_VERSION}})`).toString()}];`
          );
      }
    }

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
                        return response.items;
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
