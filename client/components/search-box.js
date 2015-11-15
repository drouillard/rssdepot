const React = require('react');
const ApiStore = require('../stores/api-store');
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

    //componentDidMount(){
    //    ApiActions.searchFeeds('');
    //}

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
    }

    render() {

        var message = this.state.message;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                    <div className="input-field col s8">
                        <input value={message} type='text' placeholder='Search for RSS Feeds' onChange={this.handleChange.bind(this)} ></input>
                    </div>
                        <div className="input-field col s4">
                            <input className='btn blue' type='submit' value='Search'/>
                            </div>
                        </div>
                </form>
            </div>
        );
    }
}
