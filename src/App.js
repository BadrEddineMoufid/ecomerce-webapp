import React from 'react';
import HomePage from './pages/homepage/homepage'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop';
import './App.css';




function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
