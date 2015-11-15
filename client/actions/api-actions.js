import alt from '../alt';
var xhr = require('xhr');

class ApiActions {

    searchFeeds(query) {
        const self = this;

        xhr({
            uri: '/feeds?q=' + query,
            headers: {
                'Content-Type': 'application/json'
            }
        }, function (err, resp, body) {
            if(!err) {
                console.log('the response body is', body);
                self.dispatch(JSON.parse(body));
            }
        });

        return { query };
    }
}

export default alt.createActions(ApiActions);
