import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Restaurants from './Components/Restaurants'
import Bars from './Components/Bars'




const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/ContactUs' component={ContactUs}/>
      <Route exact path='/restaurants' component={Restaurants}/>
      <Route exact path='/bars' component={Bars}/>
    </Switch>
  </main>
)

export default Routes
