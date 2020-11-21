import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage.js";
import Microsoft from "../images/placements/microsoft.png";
import CA from "../images/placements/ca.png";
import JP_Morgan from "../images/placements/jp_morgan.jpeg";
import Gramener from "../images/placements/gramener.png";
import Three_com from "../images/placements/3com.png";
import Gati from "../images/placements/gati-logo.png";
import Mutual_Mobile from "../images/placements/mutual_mobile.png";

class App extends React.Component {
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
      <div id="top">
        <HeaderTitle name="Corporate Relationships" />
        <div className="">
          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={Microsoft} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>Microsoft</strong>
              </h2>
              <p className="general-text">
                Microsoft has offered to conduct .NET courses for MSITians based
                on real world case studies.
              </p>
            </div>
          </div>

          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={CA} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>Computer Associates</strong>
              </h2>
              <p className="general-text">
                Computer Associates conduct monthly technical talks on topics
                like security, storage, IT Infrastructure management etc. Also
                CA has offered internships for students during their practicum
                period. Currently there are about eight MSITians working as
                interns and two full time employees at CA. The company is eager
                to participate in the learning by doing model of MSIT and
                contribute in developing the course content for Storage
                Technologies.
              </p>
            </div>
          </div>

          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={JP_Morgan} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>JP Morgan</strong>
              </h2>
              <p className="general-text">
                CIHL/MSIT and JP Morgan Chase Hyderabad have MOU relating to
                internships, recruitment and collaboration towards providing
                industry perspective for university programs.
              </p>
            </div>
          </div>

          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={Gramener} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>Gramener - A Data Science company.</strong>
              </h2>
              <p className="general-text">
                Gramener offering Data Visualisation course at IIIT Hyderabad
                and JNTU Hyderabad as part of the Master of Science in
                Information Technology (MSIT) outreach programme. This programme
                is offered by a consortium of universities with the support of
                State government of Andhra Pradesh and Telangana. Through this
                partnership, Gramener is collaborating to create course content,
                design curriculum as per industry standards and also have joint
                partnership to execute projects on predictive analytics and data
                visualisation.
              </p>
            </div>
          </div>

          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={Three_com} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>3com</strong>
              </h2>
              <p className="general-text">
                3COM has opened up a computer networks research laboratory on
                campus and is offering internship to a number of MSITians. The
                company is also offering practicum to the students that involves
                real world problems in networks and security.
              </p>
            </div>
          </div>

          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={Gati} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>GATI</strong>
              </h2>
              <p className="general-text">
                GATI has offered practicum to MSITians to improve the in-transit
                visibility of packages and develop a vehicle tracking system.
              </p>
            </div>
          </div>

          <div className="row main-body mt-5 mb-5">
            <div className="col-lg-3 Head-img">
              <img src={Mutual_Mobile} className="box  img-fluid img-size" />
            </div>

            <div className="col-lg-8 ml-4">
              <h2 className="Left-title">
                <strong>Mutual Mobile</strong>
              </h2>
              <p className="general-text">
                CIHL/MSIT and mutual mobile have MOU in offering course work on
                ecommerce, mobile technologies and latest industry trends. This
                also includes internship programs and recruitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
