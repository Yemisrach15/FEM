import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Map from './components/Map';
import Footer from './components/Footer';
import './stylesheets/style.css';

ReactDOM.render(
  <Main />,
  document.getElementById('wrapper')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
)