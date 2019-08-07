import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase';

import './App.css';

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';



class App extends React.Component {
  
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }
  
  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  };
  
}

export default App;
