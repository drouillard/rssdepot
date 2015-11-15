const React = require("react");

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue || ''}
    }


    componentDidMount() {
        const self = this;

        function tick() {
            const {step, interval} = self.props
            self.setState({
                value: self.state.value + step,
                interval: setTimeout(tick, interval)
            })
        }
    }

    componentWillUnmount() {
        clearTimeout(this.state.interval)
    }

    render() {

        var rows = this.props.data.map(function (record) {

            return (
                <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>
                        <Link
                            className="btn btn-default btn-sm"
                            to="rssFeedURL"
                            params={{ url: record.url }}>
                            {record.url}
                        </Link>
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
        )
    }
}