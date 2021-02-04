import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './componets/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/singInAndSignup/signInAndSignup.page'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/singin' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App
