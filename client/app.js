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
                <Footer />
            </div>
        );
    }
}

class Header extends Component {
    render() {
        const {counter1} = this.props;
        return (
            <div className='blue white-text center-align'>
                <h1>RSS Depot</h1>
                <Counter
                    initialValue={counter1}
                    step={2}
                    interval={3000} />
            </div>
        );
    }
}

const Footer = React.createClass({

    render() {
        return (
            <footer>
                <p>Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.</p>
            </footer>
        );
    }
});
