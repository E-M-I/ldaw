import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'
import Mau from './Mau'
import Ems from './Ems'
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

if (window.location.pathname === '/mau' && document.getElementById('profile')) {
    ReactDOM.render(<Mau />, document.getElementById('profile'));
}

if (window.location.pathname === '/ems' && document.getElementById('profile')) {
    ReactDOM.render(<Ems />, document.getElementById('profile'));
}