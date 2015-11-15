const React = require('react');

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.initialValue || 0};
    }


    componentDidMount() {
        const self = this;
        tick();

        function tick() {
            const {step, interval} = self.props
            self.setState({
                value: self.state.value + step,
                interval: setTimeout(tick, interval)
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.state.interval);
    }

    render() {
        return (
            <h1>{this.state.value}</h1>
        );
    }
}
