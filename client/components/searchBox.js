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

        return (
            <div>
                <form>
                    <input></input>
                </form>
            </div>
        )
    }
}