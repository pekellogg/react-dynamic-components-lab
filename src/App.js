import React, { Component } from "react";
import BlogPost from "./BlogPost.js"
import ColorBox from "./ColorBox.js"

export default class App extends Component {
  
  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="separator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} /> {/* render a ColorBox with 1 opacity, then opacity conditional eval-- T: decrement by .1*/}
          </div>
      </div>
    );
  };

};