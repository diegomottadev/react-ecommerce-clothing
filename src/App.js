import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './componets/header/header.component'
import { auth } from './firebase/firebase.utils'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/singInAndSignup/signInAndSignup.page'

class App extends React.Component{
  constructor(){
    super();


    this.state = {
      currentUser: null
    }

  }

  //Maneja el tema de autenticacio firebase
  unSuscribreFromAuth = auth;

  componentDidMount(){
    this.unSuscribreFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount(){
    this.unSuscribreFromAuth();
  }

  //->hasta aqui

render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/singin' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}
}

export default App
