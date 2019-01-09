import React, { Component, Fragment } from 'react';
import i18n from '../../i18n';
import { withI18n } from 'react-i18next';
import './index.scss';

class Header extends Component {
    state = {
        currentLng: 'en',
        label: '中文'
    }

    toggleLng = () => {
        const { currentLng } = this.state;
        const { lng, label } = this.calcLng(currentLng);
        i18n.changeLanguage(lng, () => {
            this.setState({
                label,
                currentLng: lng
            })
        });
    }

    calcLng = (cl) => cl === 'en' ? {
        lng: 'cn',
        label: 'Eng'
    } : {
            lng: 'en',
            label: '中文'
        }

    render() {
        const { label } = this.state;
        return (
            <div id="header">
                <nav className="nav">
                    <div className="brand">
                        <span>AkatQuas</span>
                    </div>

                    <div className="menu">
                    <button onClick={this.toggleLng} className="pseudo">{label}</button>
                    </div>
                </nav>
                <div className="nav-holder"></div>
            </div>
        )
    }
}

export default withI18n()(Header);