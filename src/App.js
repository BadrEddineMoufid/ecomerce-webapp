import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDoc} from './components/firebase/firebase';

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

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          
        })
      }
      else{
        this.setState({currentUser: userAuth}, ()=> console.log(this.state));
        //console.log(this.state);
      }
      
      //console.log(this.state);
      //createUserProfileDoc(user);
      //this.setState({currentUser: user});
      //console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
