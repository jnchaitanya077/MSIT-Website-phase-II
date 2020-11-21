import React from "react";
import HeaderImage from "../components/headerImage.js";
import {
  walkInStarted,
  walkInDateStart,
  walkInEndDate,
  gatApplyLastDate,
  gatExamDate,
  gatResults,
  counselingStart,
  msitProgramStart,
} from "./examDates";

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
        <HeaderImage name="Schedule" />
        <div class="container author-block mt-5">
          <div>
            <p>
              <h1 className="preview">Admission-Schedule</h1>
              <strong>
                Due to the COVID-19 situation, the Entrance Exam Graduate
                Aptitude Test (GAT) is conducted online i.e. candidate can take
                the test from home.
              </strong>
            </p>
            <h2 className="title">
              The following are the important dates for the 2020 admissions:
            </h2>
            <div className="container">
              <table className="table" style={{ backgroundColor: "#e3f2fd" }}>
                <tr>
                  <td>Walk-In Entrance started from</td>
                  <td>{walkInStarted}</td>
                </tr>
                <thead>
                  <tr>
                    <th scope="col">Due to the COVID-19 Situation</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Walk-In Entrance GAT (online) starts on</td>
                    <td>{walkInDateStart}</td>
                  </tr>
                  <tr>
                    <td>Walk-In Entrance GAT (online) ends on</td>
                    <td>{walkInEndDate}</td>
                  </tr>
                  <tr>
                    <td>
                      Last date for submission of application forms for Regular
                      GAT Entrance Exam (online)
                    </td>
                    <td>{gatApplyLastDate}</td>
                  </tr>
                  <tr>
                    <td>Regular GAT Entrance Exam (online)starts </td>
                    <td>{gatExamDate}</td>
                  </tr>
                  <tr>
                    <td>Results of GAT</td>
                    <td>{gatResults}</td>
                  </tr>
                  <tr>
                    <td>Counseling starts</td>
                    <td>{counselingStart}</td>
                  </tr>
                  <tr>
                    <td>Commencement of MSIT Main Program</td>
                    <td>{msitProgramStart}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
