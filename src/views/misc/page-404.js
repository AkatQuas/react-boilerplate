import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import img404 from './404.png';
import './page-404.scss';

const Page404 = ({ goBack }) => {

    const lang = navigator['browserLanguage'] ? navigator['browserLanguage'] : navigator.language;
    let tips = null;
    if (lang.indexOf('en') > -1) {
        tips = (
            <Fragment>
                <h1>Page not found.</h1>
                <h4>Error 404.</h4>
                <p onClick={ goBack }><span>Back</span></p>
            </Fragment>
        );
    } else {
        tips = (
            <Fragment>
                <h1>页面不存在。</h1>
                <h4>休息一下，返回瞧瞧吧</h4>
                <p onClick={ goBack }><span>返回</span></p>
            </Fragment>
        );
    }

    return (
        <div className="page-404">
            <div className="img"><img src={ img404 } alt="404" /></div>
            <div className="tips">{ tips }</div>
        </div>
    );
};

export default connect(null, { goBack })(Page404);
