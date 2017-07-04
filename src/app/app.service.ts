import * as fetchJsonp from 'fetch-jsonp';


export class AppService {
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
                            const [length, ...posts] = response;
                            return {length, posts};
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
}
