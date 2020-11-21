import React, { Component } from "react";
import Images from "./Images.js";
import HeaderTitle from "../components/headerImage.js";
import "../css/Gallery.css";

//Gallery page
//This page routes to Images page
class Gallery extends Component {
  componentDidMount() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  componentDidUpdate() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  render() {
    return (
      <div className="App" id="top">
        <HeaderTitle name="Gallery" />
        <Images />
      </div>
    );
  }
}

export default Gallery;
