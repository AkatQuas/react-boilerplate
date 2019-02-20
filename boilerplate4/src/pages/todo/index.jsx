import React from 'react';
import ReactDOM from 'react-dom';
import rem from '@/js/rem';
import '@/styles/reset.css';
// import '@/js/styles/iakit.h5.css';
import '@/js/mute-image';

import MainPage from './main';

rem();

const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');

ReactDOM.render(<MainPage />, wrapper || content);