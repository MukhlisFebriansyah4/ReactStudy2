import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/antd/dist/antd.css'
import Applogin from './components/Applogin/Applogin.jsx'
// import Students from './components/Students.jsx'
// import Headers from './components/Header.jsx'

class App extends Component {
  render() {  
    return (
      <div >                
        <Applogin />
      </div>
    );
  }
}

export default App;
