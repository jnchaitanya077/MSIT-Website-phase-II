import React, { Component } from "react";

// import Lightbox from "react-lightbox-component";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { post } from "jquery";

const images = [
  { id: 1, image: "//placekitten.com/1500/500" },
  { id: 2, image: "//placekitten.com/4000/3000" },
  { id: 3, image: "//placekitten.com/800/1200" },
  { id: 4, image: "//placekitten.com/1500/1500" },
  { id: 5, image: "//placekitten.com/1500/1500" },
  { id: 6, image: "//placekitten.com/800/1200" },
  { id: 7, image: "//placekitten.com/1500/500" },
  { id: 8, image: "//placekitten.com/800/1200" },
  { id: 9, image: "//placekitten.com/1500/1500" },
  { id: 10, image: "//placekitten.com/1500/1500" },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="container">
        {images.map((img) => {
          return (
            <React.Fragment key={post.id}>
              <img
                src={img.image}
                width="200"
                height="200"
                onClick={() =>
                  this.setState({ isOpen: true, photoIndex: img.id - 1 })
                }
              />
            </React.Fragment>
          );
        })}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].image}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
export default App;
