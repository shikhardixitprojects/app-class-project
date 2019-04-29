import React from 'react'
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
import Banner from './Banner'

const Bars = () => (
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
            <li><NavLink exact to="/Burton">Burton</NavLink></li>
            <li><NavLink exact to="/OtherPlace">The Other Place</NavLink></li>
          </div>
        <div>
          <Route exact path="/Burton" component={Burton} />
          <Route exact path="/OtherPlace" component={OtherPlace} />
        </div>
      </div>
    )
  }
}

class Burton extends React.Component {
    render() {
        return <h1>Welcome to Burton</h1>;
    }
}

class OtherPlace extends React.Component {
    render() {
        return <h1>Welcome to The Other Place!</h1>;
    }
}

export default Bars
