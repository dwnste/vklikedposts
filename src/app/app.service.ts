import * as fetchJsonp from 'fetch-jsonp';
import * as moment from 'moment';

moment.locale('ru');

export class AppService {
    getUserData({user_id, user_access_token}) {
        const url = `
            https://api.vk.com/api.php?
                oauth=1&
                method=users.get&
                user_ids=${user_id}&
                name_case=Nom&
                fields=photo_50,online&
                access_token=${user_access_token}`.replace(/ /g, '');

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
            access_token=${user_access_token}`.replace(/ /g, '');

        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                            const [available, ...groups] = response;
                            return {available, groups};
                        })
                .catch( ex => console.log('parsing failed', ex) );
    };

    getWallPosts({owner_id, user_access_token, count}) {
        const url = `
        https://api.vk.com/api.php?
            oauth=1&
            method=wall.get&
            owner_id=${owner_id}&
            offset=0&
            count=${count}&
            filter=all&
            access_token=${user_access_token}`.replace(/ /g, '');

        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                            if (response) {
                                const [length, ...posts] = response;
                                return {length, posts};
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
            `.replace(/ /g, '');

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
