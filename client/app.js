const React   = require('react'),
    Counter = require('./components/feed-counter'),
    SearchBox = require('./components/search-box'),
    SearchResults = require('./components/search-results');

const {Component} = React;

export default class App extends Component {

    render() {

        const {feeds} = this.props;
        return (
                <div className='container'>
                <Header />
                <SearchBox />
                <SearchResults feeds={feeds}/>

                </div>

        );
    }
}

class Header extends Component {

    render() {

        const {counter1} = this.props;
        return (
            <div className='blue-text center-align'>
                <h1>RSS Depot</h1>
                <Counter
                    initialValue={counter1}
                    step={2}
                    interval={3000} />
            </div>
        );
    }
}
