import React from 'react'
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
import Banner from './Banner'

const Restaurants = () => (
  <div>
  <Banner/>
  <BrowserRouter>
    <DashBoard/>
  </BrowserRouter>
  </div>
)

class DashBoard extends React.Component{
  render(){
    return(
      <div>
          <div>
            <li><NavLink exact to="/Applebees">Applebees</NavLink></li>
            <li><NavLink exact to="/ElSombrero">El Sombrero</NavLink></li>
          </div>
        <div>
          <Route exact path="/Applebees" component={Applebees} />
          <Route exact path="/ElSombrero" component={ElSombrero} />
        </div>
      </div>
    )
  }
}

class Applebees extends React.Component {
    render() {
        return <h1>Welcome to Applebees</h1>;
    }
}

class ElSombrero extends React.Component {
    render() {
        return <h1>Welcome to El Sombrero!</h1>;
    }
}

export default Restaurants
