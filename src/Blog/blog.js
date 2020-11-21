import React, { useState } from "react";
import "../css/blog.css";
import { Link } from "react-router-dom";
import HeaderTitle from "../components/headerImage.js";
import wiki1 from "../images/blog/wiki1.jpg";
import article21 from "../images/blog/article21.png";
import apex1 from "../images/blog/apex1.png";

function App() {
  return (
    <div>
      <HeaderTitle name="MSIT Blog" />
      <div style={{ marginTop: "5%" }}>
        {/* Artilce-3 */}

        <div className="row main-body">
          <div className="col-lg-3 Head-img">
            {/* This block is for the image beside the article heading. */}
            <img src={article21} className="box  img-fluid img-size2" />
          </div>

          <div className="col-lg-8 ml-4">
            {/* This is the block where article is defined in brief and link more more content is given. */}
            <h2 className="Left-title">
              <strong>Values From A Virus</strong>
            </h2>

            <p class="cat-txt">
              {" "}
              By : <a style={{ color: "#95b4e8" }}> IIIT Blog </a>{" "}
              <span style={{ color: "#95b4e8" }}>|</span> Published on{" "}
              <a style={{ color: "#95b4e8" }}> June 25, 2020</a>
            </p>
            <p>
              It may have been a drop in the ocean but the International
              Institute of Information Technology Hyderabad’s small contribution
              towards the migrant crisis during the pandemic has lessons for
              all. Here’s a look at the initiative from the student volunteer...
              <Link to="/blog-page2">ReadMore</Link>
            </p>
          </div>
        </div>

        {/* Artilce-2 */}
        <div className="row main-body mt-5 mb-5">
          <div className="col-lg-3 Head-img">
            <img src={apex1} className="box  img-fluid img-size2" />
          </div>

          <div className="col-lg-8 ml-4">
            <h2 className="Left-title">
              <strong>
                Apex: IIITH’s Welcoming Body by Students for Students
              </strong>
            </h2>

            <p class="cat-txt">
              {" "}
              By : <a style={{ color: "#95b4e8" }}> Sarith Chebbi </a>{" "}
              <span style={{ color: "#95b4e8" }}>|</span> Published on{" "}
              <a style={{ color: "#95b4e8" }}> June 8, 2020</a>
            </p>
            <p>
              In the pursuit of higher education, the transition from high
              school to college can be pretty daunting for students. For a vast
              majority, it is their first ever move away from home. To combat
              turbulence of any kind during this phase, at IIITH we have the
              student Apex body...<Link to="/blog-page3">ReadMore</Link>
            </p>
          </div>
        </div>

        {/* Artilce-1 */}
        <div className="row main-body mt-5 mb-5">
          <div className="col-lg-3 Head-img">
            <img src={wiki1} className="box  img-fluid img-size2" />
          </div>

          <div className="col-lg-8 ml-4">
            <h2 className="Left-title">
              <strong>Telugu Wikipedia: Rally For Knowledge Rivers</strong>
            </h2>

            <p class="cat-txt">
              {" "}
              By : <a style={{ color: "#95b4e8" }}> Sarith Chebbi </a>{" "}
              <span style={{ color: "#95b4e8" }}>|</span> Published on{" "}
              <a style={{ color: "#95b4e8" }}> Feb 26, 2020</a>
            </p>
            <p>
              Inspired by Prof. Raj Reddy’s vision, the International Institute
              of Information Technology, Hyderabad has embarked on an ambitious
              mission to develop and enhance resources for Indian language
              Wikipedia. ...<Link to="/blog-page">ReadMore</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
