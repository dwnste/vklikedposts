import * as fetchJsonp from 'fetch-jsonp';
import * as moment from 'moment';
import * as async from 'async';

moment.locale('ru');

export class AppService {
    execute({user_access_token, ...params}) {
        const a = 'return API.users.get({"user_ids": API.photos.search({"q":"Beatles", "count":3}).items@.owner_id})@.last_name;'
        const url = `https://api.vk.com/method/execute?code=${a}&access_token=${user_access_token}`
        return fetchJsonp(url)
                    .then( response => response.json())
                    .then( ({ response }) => {
                        console.log(response);
                    })
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
                            const [available, ...groups] = response;
                            return {available, groups};
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

    apiQuery(count, apiQueryCallback, httpRequest) {
        let
          maxPerRequest = 100,
          maxRPS = 3,
          offsetsCount = Math.ceil(count / maxPerRequest),
          offsets = Array.apply(null, Array(offsetsCount)).map(function(_, i) { return i*maxPerRequest}),
          results = [];

        const queue = async.queue(function (offset, callback) {
          console.log(+(new Date().getSeconds()) + ' performing offset#' + offset + ' request');
          return httpRequest(offset)
                  .then((result) => {
                    console.log('httprequest_result in service:', result.length)
                    results = results.concat(result);
                    return callback();
                  });
        }, maxRPS);
        
        async.eachLimit(offsets, maxRPS, 
            function (offset, callback) {
              console.log('eachLimit_offset:', offset);
              queue.push(offset, (err) => {
                if (err) {
                  console.log(err);
                }
              });
              setTimeout(callback, 1000);
            },
            function() {
              console.log('before drain')
              queue.drain = function(err) {
                if (!err) {
                  console.log('after drain', results)
                  apiQueryCallback(results);
                } else {
                  console.log(err);
                }
              }
            }
        );
    };
}
