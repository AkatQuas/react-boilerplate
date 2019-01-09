import React from 'react';

const UserGreeting = props => {
    return <p> Welcome User ! </p>
};
const GuestGreeting = props => {
    return <p> Welcome Guest ! </p>
};

export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOn: true };

    }

    handleClick = () => {
        // setState can take a function, whose only default parameter is previous state, as the parameter
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));

        // or takes an object
        this.setState({
            isOn: false
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isOn ? 'User On' : 'Guest here'}
                </button>
                {this.state.isOn ? <UserGreeting /> : <GuestGreeting />}
            </div>)
    }
}

