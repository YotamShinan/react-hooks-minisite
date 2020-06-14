
import React, { Component } from 'react'
import './assets/styles/global.scss';
// import Home from './pages/Home.jsx';
import HomeWithHooks from './pages/HomeWithHooks.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <HomeWithHooks />
      </div>
    )
  }
}

