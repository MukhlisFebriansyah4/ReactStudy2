import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/antd/dist/antd.css'
import Applogin from './components/Applogin/Applogin.jsx'
import Students from './components/students/Students.jsx'
import AddStudent from './components/students/AddStudents.jsx'
import Headers from './components/layout/Header.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Categories from './components/Categories.jsx'
import About from './components/pages/about'
import NotFound from './components/pages/notfound';
import EditStudents from './components/students/EditStudent'
import formlogin from './components/Formlogin/formlogin'
import Registerstudent from './components/Formlogin/register'
import { Provider } from 'react-redux'
import store from './store/store'

// HOC {High Order Component}
class App extends Component {
  render() {  
    return (      
      <Provider store = {store}>
        <Router>
        <div >                
          <Headers />
          <Switch>
              <Route exact path='/' component={Students}/>
              <Route exact path='/student/add' component={AddStudent} />
              <Route exact path='/login' component={formlogin} />
              <Route exact path='/register' component={Registerstudent} />
              <Route exact path='/about' component={About} />              
              <Route exact path='/student/edit/:id' component={EditStudents} />              
              <Route component={NotFound} />
            </Switch>
          </div>  
        </Router>              
        </Provider>
    );
  }
}

export default App;
