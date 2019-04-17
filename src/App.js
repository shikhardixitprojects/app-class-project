import React, { Component } from 'react';
import mainImage from './oldHickey.jpg';
import './App.css';

class App extends Component {


  render() {

    return (
      <body>
        <div className="App">

          <div className = "flex-container">
            <h1 className = "appTitle">BELP</h1>
            <div className = "Buttons ">

              <h2 className = "button"> Home</h2>
              <h2 className = "button">About</h2>
              <h2 className = "button">Contact Us</h2>
            </div>

          </div>

          <p className = "LittleIntro">A Guide to Eat Out near St. Bonaventure</p>
          <p className = "appHeader">By Bonnies for Bonnies</p>


          </div>

          <div classname = "body">

          <img className="lakeview" src="http://file1.chinesemenu.com/115741730/20100119031523621.jpg" alt="lakeview" />
          <p className = "LakeView"> LakeView is a chinese restaurant that serves chinese food. It is typcially quite empty, but it seems most of the customers order from here than go here. Still, it has quality food and pretty cheap. Rating 4/5</p>

          <img className="applebee" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F01%2Fapplebees1.jpg%3Fw%3D2000&w=450&c=sc&poi=face&q=85"/>
          <p className = "AppleBee"> AppleBee is a family restaurant that serves your typical amercian food. It's usually very packed and you might need to wait some time before being allowed in. But if you just want a classic american restaurant, this would be the place with family or friends. Rating 4.5</p>

          <img className="qq" src="https://enchantedmountains.com/files/imagecache/place_page/places/qq-buffet.jpg"/>
          <p className = "Q&QBuffet"> Q&QBuffet is a chinese buffet that serves mostly chinese food along with some american food. The health problems around the resturant are concerning. But if you don't care what you are eating and how much, then this place is great for you. Rating 3.5/5</p>
          </div>




      </body>

    );
  }
}

export default App;
