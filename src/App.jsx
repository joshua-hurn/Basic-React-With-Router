import React, { Component } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleCity from './components/Select';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path='/' component={CardList} />
          <Route path='/city/:id' component={SingleCity} />
        </Router>
      </div>
    );
  }
}

export default App
