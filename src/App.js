import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDoc} from './components/firebase/firebase';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { setCurrentUser } from './redux/user/user-actions';


class App extends React.Component {
  
  // constructor(){
  //   super();

  //   this.state={
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data()); 
          
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          
        })
      }

      setCurrentUser(userAuth);

      // else{
      //   this.setState({currentUser: userAuth}, ()=> console.log(this.state));
      //   //console.log(this.state);
      // }
      
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
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin'  
            render={
              //redirect to home after signin
              () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) 
            } 
          />
        </Switch>
      </div>
    );
  };
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})



//dispatching actions to reducers
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
