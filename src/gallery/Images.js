import React, { Component } from "react";
import "../css/images.css";
import Popup from "./Popup.js";

//This page leads to Popup Page

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      //imageUrlArray : has URL's to all the images to be displayed
      //`${process.env.PUBLIC_URL}` is given to acess the images in public environment
      imageUrlArray: [
        require("../images/gallery/one.JPG"),
        require("../images/gallery/two.jpg"),
        require("../images/gallery/three.jpg"),
        require("../images/gallery/four.jpg"),
        require("../images/gallery/five.jpg"),
        require("../images/gallery/six.jpg"),
        require("../images/gallery/seven.jpg"),

        // `${process.env.PUBLIC_URL}` + "/images/slider_3.jpg",
        // `${process.env.PUBLIC_URL}` + "/images/logo192.png",
        // `${process.env.PUBLIC_URL}` + "/images/dc0003.jpg",
      ],
      showModal: false,
      popImageUrl: "",
    };
  }

  //This function handlePopup is used to send the selected image url to Popup page

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url,
    });
  };

  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      //This is used to print all the images in a sequence
      return (
        <img
          className="singleImage"
          // style = {{height:"4%", width:"auto"}}
          src={url}
          key={index}
          onClick={() => this.handlePopup(url)}
        />
      );
    });
    return (
      //we call Popup page here by sending the url and a link to close the Popup

      <div className="Images" style={{ backgroundColor: "whitesmoke" }}>
        {images}

        {this.state.showModal ? (
          <Popup
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />
        ) : null}
      </div>
    );
  }
}

export default Images;
