import React, { Component } from 'react';

import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponent/Header';
import ContentA from './components/Content/ContentA';
import ContentB from './components/Content/ContentB';

import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
          
          <Header/> 
          <ContentA/>
          <ContentB/>
          <Footer/>
         
      </div>
      
    );
  }
}

export default App;
