import React from "react";
import { removeData } from "jquery";
import HeaderTitle from "../components/headerImage.js";
import MsitAdv from "../images/AboutMsit/msitadv.jpg";
import { Link } from "react-router-dom";
import "../css/AboutMsit.css";
import { render } from "@testing-library/react";

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
      <div style={{ backgroundColor: "whitesmoke" }} id="top">
        <HeaderTitle name="Overview" />
        <div className="newsLayout" style={{ paddingTop: 0 }}>
          <div
            className="content-overview shadows"
            id="charter"
            //   style={{ paddingBottom: 0 }}
          >
            <h2 style={{ paddingBottom: "10px" }} className="title-text">
              MSIT Charter
            </h2>
            <p className="general-text">
              To prepare very high quality IT professionals for a global market
              by grooming them in IT and Soft Skills.
            </p>
            <p className="general-text">
              To enable them to accept opportunities in a framework of
              professionally sound and quality conscious organizations, as well
              as to take up entrepreneurial ventures.
            </p>
            <p className="general-text">
              To develop their sensitivity and capability to continually respond
              to changing technology and working environments, by using an
              'active learning' approach.
            </p>
            <p className="general-text">
              To provide an opportunity not only to IT professionals but also to
              professionals and experts from non-IT domains to acquire a
              thorough knowledge of IT concepts and the capacity to swiftly
              translate this knowledge into services in their respective
              domains.
            </p>
          </div>
          <div className="content-overview shadows" id="MsitProgram">
            <h2 className="title-text">MSIT Program</h2>
            <img
              src={MsitAdv}
              style={{ width: "38%", float: "right", paddingLeft: "2%" }}
            />
            <p className="general-text">
              MSIT program is being offered by “Consortium of Institutions of
              Higher Learning” (CIHL), formed by the universities in Andhra
              Pradesh and Telangana. CIHL has designed the program with inputs
              from major IT companies
            </p>
            <h4>
              This is a glimpse of the leading institutions involved in this
              programme:
            </h4>
            <div
              className="col"
              style={{
                height: "auto",
                width: "500px",
                padding: "2%",
                marginTop: "2%",
              }}
            >
              <ul>
                <li>IIIT, Hyderabad (IIIT-H)</li>
                <li>JNTU, Hyderabad (JNTUH)</li>
                <li>JNTU, Kakinada (JNTUK)</li>
                <li>JNTU, Anantapur (JNTUA)</li>
                <li>SV University, Tirupati (SVU)</li>
              </ul>
            </div>
            <p className="general-text">
              MSIT aims to produce skilled Professionals who have knowledge of
              the core principles underlying information technology and an
              understanding of emerging industry trends.The MSIT program was
              started in 2001 and students were admitted to the Learning Centers
              at International Institute of Information Technology (IIIT),
              Hyderabad, School of IT, Jawaharlal Nehru Technological University
              (JNTU), Hyderabad, College of Engineering, Osmania University and
              Regional Engineering College (REC, now NIT), Warangal.
            </p>
            <p className="general-text">
              The MSIT (MS in IT or Master of Science in Information Technology)
              is a two year post graduate programme in Computer Science. MSIT is
              an innovative multi-university interdisciplinary post-graduate
              programme. MSIT program is being offered by “Consortium of
              Institutions of Higher Learning” (CIHL), formed by the
              Universities.
            </p>
            <p className="general-text">
              In 2004, the Story/Problem Centered Curriculum was introduced and
              the fourth batch of students were admitted to the MSIT division,
              International Institute of Information Technology (IIIT), College
              of Engineering, Osmania University (OU), Hyderabad and School of
              Information Technology (SIT), Jawaharlal Nehru Technological
              University (JNTU).
            </p>
            <p className="general-text">
              MSIT offers the latest domain specializations on par with
              international universities. Computer Networks and Information
              Security as domain specializations are offered for the first time
              in the states (AP & Telangana) only in MSIT. Besides these, the
              course also offers specializations in Software Engineering and
              E-commerce which have very high demand in the current software
              industry.
            </p>
            <h4>
              Eligibility :{" "}
              <span style={{ color: "red", fontSize: "large" }}>
                {" "}
                B.Tech / B.E (All Branches)
              </span>
            </h4>
            <h3 style={{ margin: "0%", marginBottom: "2%" }}>
              Want to know about Specializations?
            </h3>
            <Link
              to="/CoursesAndStructure/#specializations"
              className="btn btn-outline-success"
            >
              Click here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
