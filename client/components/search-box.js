const React = require('react');
const constants = require('../constants/RSSDepotConstants');
const ApiStore = require('../stores/ApiStore');
const ApiActions = require('../actions/api-actions');

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue || ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    updateResults(results){
        console.log('The results... ' + results);
    }
    handleChange(event){
        console.log('This event ->', event);
        const query = event.target.value;
        console.log('searchBox search term = ', query);
        this.setState({message: query} );
        ApiActions.searchFeeds(query);
    }

    handleSubmit (event) {

        event.preventDefault();
        event.stopPropagation();
        this.setState(event.target.value);
        //Actions.createNew({
        //    username: this.state.username,
        //    email: this.state.email,
        //    password: this.state.password
        //}, this.context.router);
    }
    render() {
        var message = this.state.message;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={message} onChange={this.handleChange.bind(this)} ></input>
                    <input type='submit' value='Search'/>
                </form>
            </div>
        )
    }
}
