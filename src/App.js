import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
}from 'react-router-dom';
import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponent/Header';
import Homepage from'./components/Page/HomePage';
import Product from'./components/Page/Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Header/> 

            <Route exact path='/' components={Homepage}/>
            <Route exact path='/Product' components={Product}/>

          <Footer/>
         
      </div>
      </Router>
    );
  }
}

export default App;
