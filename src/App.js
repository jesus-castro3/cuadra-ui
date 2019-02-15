import React, { Component } from 'react';
import Cuadra from './Cuadra/Cuadra';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faMapMarkedAlt, faCalendarAlt, faBullhorn, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add([faTimesCircle, faMapMarkedAlt, faCalendarAlt, faBullhorn, faUserCircle]);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Cuadra/>
      </div>
    );
  }
}

export default App;
