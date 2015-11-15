var alt = require('../alt');
var ApiActions = require('../actions/api-actions');

class ApiStore {
    constructor() {
        this.results = [];

        this.bindListeners({
            handleSearchFeeds: ApiActions.searchFeeds
        });
    }

    handleSearchFeeds(results) {
        console.log('Storing results as ->', results);
        this.results = results;
    }
}

module.exports = alt.createStore(ApiStore, 'ApiStore');
