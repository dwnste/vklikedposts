import * as fetchJsonp from 'fetch-jsonp';
import * as moment from 'moment';

moment.locale('ru');

import { async } from 'async';

export class AppService {
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

    getAllWallPosts({owner_id, user_access_token, count, offset}) {
        const httpRequest = function(count, callback) {
            return this.appService.getWallPosts({
                    owner_id: owner_id,
                    count: count,
                    user_access_token: user_access_token,
                    offset: offset })
                        .then((response: any) => callback(response.posts))
            }

        const apiQuery = function (count, apiQueryCallback)  {
        const maxPerRequest = 100,
            maxRPS = 3,
            offsetsCount = Math.ceil(count / maxPerRequest),
            offsets = Array.apply(null, Array(offsetsCount)).map(function(_, i) { return i*maxPerRequest}),
            results = [];

        const queue = async.queue(function (offset, callback) {
            console.log(+(new Date().getSeconds()) + ' performing offset#' + offset + ' request');
            return httpRequest(offset, function(result) {
            results.push(result);
            callback();
            });
        }, maxRPS);

        async.eachLimit(offsets, maxRPS, 
            function (offset, callback) {
            // console.log(+(new Date()) + ' pushing ' + offset);
            queue.push(offset);
            setTimeout(callback, 1000);
            },
            function() {
            if (queue.length() === 0) {
                apiQueryCallback(results);
            } else {
                queue.drain = function() {
                return apiQueryCallback(results);
                }
            }
            }
        );
        };

        return apiQuery(1000, function(results) {
            console.log('all items are proccesed');
            return results;
        });
    }

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
}
