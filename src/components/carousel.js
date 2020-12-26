import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import "../css/header.css";
import slider1 from "../images/slider/slider1.jpg";
import slider_2 from "../images/slider/slider_2.jpg";
import slider_3 from "../images/slider/slider_6.jpg";
import slider_4 from "../images/slider/slider_4.jpg";
import slider_5 from "../images/slider/slider_7.jpg";

function App() {
  const [images, setImages] = useState({ images: [] });

  // load carousel form database
  useEffect(() => {
    fetch("http://localhost:5000/loadImagesApi")
      .then((data) => data.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <section>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active c-item" data-pause="hover">
            <img src={slider1} className="d-block w-100 " alt="slider-image1" />
          </div>
          {images.images.map((eachImage) => {
            return (
              <div key={uniqid()} className="carousel-item c-item">
                <img
                  src={"http://localhost:5000/" + eachImage}
                  className="d-block w-100"
                  alt="slider-image1"
                />
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default App;
