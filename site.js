const React = require('react'),
    ReactDOM = require('react-dom'),
    App   = require('./client/app');

const initialModel = window.INITIAL_MODEL;

ReactDOM.render(<App {...initialModel} />, document.getElementById('app'));
