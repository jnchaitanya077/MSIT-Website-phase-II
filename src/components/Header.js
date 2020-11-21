import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import Logo from "../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/#top">
          <img
            src={Logo}
            className="img-fluid header-logo"
            alt="MSIT-Logo"
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About MSIT
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </a>

              <div
                className="dropdown-menu"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/MsitProgram/#charter" className="dropdown-item">
                  MSIT Charter
                </Link>
                <Link to="/MsitProgram/#MsitProgram" className="dropdown-item">
                  MSIT Program
                </Link>
                <Link to="/CoursesAndStructure/#top" className="dropdown-item">
                  Courses and Structure
                </Link>
                <Link to="/Curriculum/#top" className="dropdown-item">
                  Curriculum
                </Link>

                <Link
                  to="/CertificationAndLearningCenters/#top"
                  className="dropdown-item"
                >
                  Certification and Learning Centers
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="#"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MSIT Advantage
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </Link>
              <div
                className="dropdown-menu"
                data-toggle="collapse"
                aria-labelledby="navbarDropdown"
                data-target=".navbar-collapse.show"
              >
                <Link
                  to="/msit-advantage/#LearningByDoing"
                  className="dropdown-item"
                >
                  Learning by Doing
                </Link>
                <Link
                  to="/msit-advantage/#ProjectCenteredCurriculum"
                  className="dropdown-item"
                >
                  Project Centered Curriculum
                </Link>
                <Link
                  to="/msit-advantage/#SoftSkills"
                  className="dropdown-item"
                >
                  Soft Skills
                </Link>
                <Link
                  to="/msit-advantage/#ResourcesForStudents"
                  className="dropdown-item"
                >
                  Resources for Students
                </Link>
                <Link
                  to="/msit-advantage/#Infrastructure"
                  className="dropdown-item"
                >
                  Infrastructure
                </Link>
                <Link to="/msit-advantage" className="dropdown-item">
                  Success Stories
                </Link>
                <Link
                  to="/CoursesAndStructure/#specializations"
                  className="dropdown-item"
                >
                  Specializations
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admissions
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </a>
              <div
                className="dropdown-menu"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                aria-labelledby="navbarDropdown"
              >
                <Link
                  to="/admission/#AdmissionProcedure"
                  className="dropdown-item"
                >
                  Admission Procedure
                </Link>
                <Link to="/admission/#HowToApply" className="dropdown-item">
                  How to Apply?
                </Link>
                <Link to="/admission/#WalkinProcess" className="dropdown-item">
                  Walk-in Process
                </Link>

                <a
                  className="dropdown-item"
                  href="https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx"
                >
                  Mock-Test
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.msitprogram.net/admissions/"
                >
                  Apply Online
                </a>
                <Link to="/schedule/#top" className="dropdown-item">
                  Schedule
                </Link>
                <Link to="/fee-structure/#top" className="dropdown-item">
                  Fee for MSIT
                </Link>

                <Link to="/entranceSyllabus/#top" className="dropdown-item">
                  Entrance Test Syllabus
                </Link>

                <Link
                  to="/sample-test-questions/#top"
                  className="dropdown-item"
                >
                  GAT-Sample Questions
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recruiters
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </a>
              <div
                className="dropdown-menu"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/placements/#top" className="dropdown-item">
                  Placements
                </Link>

                <a
                  className="dropdown-item"
                  href="https://www.msitprogram.net/Placementhistory.php"
                >
                  Placements History
                </a>

                <Link to="/corp_relations/#top" className="dropdown-item">
                  Corporate Relationships
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Faculty
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </a>
              <div
                className="dropdown-menu"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/dean/#top" className="dropdown-item">
                  Dean
                </Link>
                <Link to="/it-mentors/#top" className="dropdown-item">
                  IT Mentors
                </Link>
                <Link to="/ss-mentors/#top" className="dropdown-item">
                  Soft Skills Mentors
                </Link>
                <Link to="/admin-staff/#top" className="dropdown-item">
                  Administrative Staff
                </Link>
                <Link to="/publications/#top" className="dropdown-item">
                  Publications
                </Link>
              </div>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/gallery/#top">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
