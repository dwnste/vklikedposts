import * as fetchJsonp from 'fetch-jsonp';


export class AppService {
    getWallPosts() {
        const url = `https://api.vk.com/api.php?oauth=1&method=wall.get&owner_id=<CLUBIDHERE>&offset=0&count=100&filter=all&access_token=b6a9e61a8f88d2c3968dc350b6998276d2d113c58b52914642b6fa5fa3e0f330ae07dff82494b6fa86318`;
        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                            console.log(url)
                            console.log(response);
                            const [length, ...posts] = response;
                            return {length, posts};
                        })
                .catch( ex => console.log('parsing failed', ex) );
    };

    isLiked({user_id, type = 'post', owner_id, item_id}) {
        const url = `//api.vk.com/method/likes.isLiked?
                        v=5.65&
                        user_id=${user_id}&
                        type=${type}&
                        owner_id=${owner_id}&
                        item_id=${item_id}
                        access_token=b6a9e61a8f88d2c3968dc350b6998276d2d113c58b52914642b6fa5fa3e0f330ae07dff82494b6fa86318`;
        return fetchJsonp(url)
                .then( response => response.json())
                .then( ({ response }) => {
                            const [liked, copied] = response;
                            return {liked, copied};
                        })
                .catch( ex => console.log('parsing failed', ex) );
    };
}
