import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class MyHeader extends Component {
    render () {
        return (
            <Fragment>
                <p>normalize.css
                    class - MyHeader
                    <br/>
                    <span>nested css example</span>
                </p>
                {/* language=SCSS */}
                <style jsx>{`
                    p {
                        color: red;
                        font-size: 40px;
                        span {
                            color: aquamarine;
                        }
                    }
                `}</style>
                <hr/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/p1">Page 1</Link>
                        </li>
                        <li>
                            <Link to="/p2">Page 2</Link>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        );
    }
}