import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/availablechits' component={Reports} />
          <Route path='/auction' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
