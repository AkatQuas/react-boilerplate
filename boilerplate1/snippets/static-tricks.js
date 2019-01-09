import PropTypes from 'prop-types';
import React from 'react';

class SingleFather extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    }
    static defaultProps = {
        name: 'Strange'
    }
    render() {
        const children = this.props.children;
        return (<div>
            {children}
            {this.props.name}
        </div>)
    };
}

export default _ => (
        <SingleFather ><p> 123 l </p></SingleFather>
)