import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Disclaimer from '../../components/disclaimer';
import './index.scss';

class Home extends Component {
    render() {
        const { t } = this.props;
        return (
            <Fragment>
                <div className="flex one two-700 home">
                    <div className="full">
                        <img src="/assets/avatar.png" alt="" />
                    </div>
                    <div><Link to="/work" >{t('page.work')}</Link></div>
                    <div><Link to="/test"> {t('page.test')} </Link> </div>
                </div>
                <Disclaimer />
            </Fragment>
        )
    }
}

export default withNamespaces('home')(Home);