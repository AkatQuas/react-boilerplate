import React from 'react';
import ReactDOM from 'react-dom';
import doRem from './utils/rem';
import isMobile from './utils/is-mobile';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

if (isMobile(navigator.userAgent || navigator.vendor || window.opera)) {
    doRem(window, document);
}

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();