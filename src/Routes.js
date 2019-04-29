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
      <Route path='/About' component={About}/>
      <Route path='/ContactUs' component={ContactUs}/>
      <Route path='/restaurants' component={Restaurants}/>
      <Route path='/bars' component={Bars}/>
    </Switch>
  </main>
)

export default Routes
