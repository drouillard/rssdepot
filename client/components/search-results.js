const React = require("react");
const ApiStore = require('../stores/ApiStore');

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
       // this.state = {value: props.initialValue || ''};
        this.state = ApiStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    static getStores() {
        return [ApiStore];
    }

    static getPropsFromStores() {
        return ApiStore.getState();
    }

    onChange(){
        console.log('Search Results... updating state');
        this.setState( ApiStore.getState() );
    }

    componentWillMount() {
        console.log('I am listening');
        ApiStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ApiStore.unlisten(this.onChange);
    }

    render() {

        var rows = this.state.results.map(function (record) {

            return (
                <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>
                        <td>{record.url}</td>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <table className="table table-striped table-results">
                    <thead>
                    <tr>
                        <th></th>
                        <th>name</th>
                        <th className="stretch">URL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

//<Link
//    className="btn btn-default btn-sm"
//    to="rssFeedURL"
//    params={{ url: record.url }}>
//    {record.url}
//</Link>