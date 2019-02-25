import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/antd/dist/antd.css'
import Applogin from './components/Applogin/Applogin.jsx'
import Students from './components/Students.jsx'
import Headers from './components/Header.jsx'
import {Provider} from './context.js'
import Categories from './components/Categories.jsx'
// HOC {High Order Component}
class App extends Component {
  render() {  
    return (
      <Provider> 
        <div >                
          <Headers />
          <Categories />
        </div>      
      </Provider>
      
    );
  }
}

export default App;
