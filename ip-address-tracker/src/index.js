import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import './stylesheets/style.css';

ReactDOM.render(
  <React.StrictMode>
	<Main />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

ReactDOM.render(
  <React.StrictMode>
	<Footer />
  </React.StrictMode>,
  document.getElementById('footer')
)