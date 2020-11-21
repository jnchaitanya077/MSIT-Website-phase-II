import React from "react";
import "../css/admissions.css";
import HeaderTitle from "../components/headerImage.js";
import {
  gatFee,
  walkInDateStart,
  walkInEndDate,
  gatApplyLastDate,
  gatExamDate,
} from "./examDates.js";

class App extends React.Component {
  componentDidMount() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "center",
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
        block: "center",
      });
    }
  }
  render() {
    return (
      <div>
        <HeaderTitle name="Admissions" />
        <div className="container author-block mt-5 mb-5 pr-2 bg-light post-block ">
          {/* Eligibility Section */}
          <div id="AdmissionProcedure">
            <h1 className="pb-4 title">
              <strong>Admission-Procedure</strong>
            </h1>
            {/* <h1 className="pb-4 preview"></h1> */}
            <h3 className="title" style={{ marginTop: "0px" }}>
              <strong>Eligibility</strong>
            </h3>
            <p>B.Tech / B.E(All Branches)</p>
            <p className="general-text">
              Admissions are based on ranks obtained in the entrance exam called
              Graduate Aptitude Test(GAT).
            </p>

            {/* GAT Exam Pattern */}
            <h4 className="title">
              <strong>
                Graduate Aptitude Test (GAT) will be conducted by CIHL in two
                ways:
              </strong>
            </h4>
            <ol>
              <li>
                Walk-in Entrance – Candidates have the option to choose the date
                of the exam.
              </li>
              <li>Regular GAT Entrance – Exam is conducted on a fixed date.</li>
            </ol>
            <p className="general-text">
              Due to the COVID-19 situation the Graduate Aptitude Test (GAT),
              both Walk- in Entrance and Regular GAT Entrance are conducted
              online i.e. candidates can take the test from home. Hence
              candidates can stay home and stay safe.Candidates can appear
              either for Walk-in OR Regular GAT Entrance OR both tests.&nbsp;
              Before COVID-19 situation Candidates can appear for Walk-ins three
              times and Regular GAT one time i.e, maximum 4 times. Due to the
              COVID-19 situation, Walk-in can be attempted one time and the
              Regular GAT can be attempted one time, i.e. candidate can take the
              test for a maximum of 2 times. The best of these two will be
              considered for the rankings.
            </p>

            <p className="general-text">
              For every attempt a non-refundable amount of Rs.{gatFee} has to be
              paid online by Credit / Debit card or net banking from our website
              (www.msitprogram.net).
            </p>

            {/* Walkin Dates and info*/}
            <h5 className="title">
              <strong>Walk-in Entrance Test</strong>
            </h5>
            <p className="general-text">
              Eligible candidates can apply online for walk-in Entrance Test
              <a href="" className="links ">
                &nbsp;<strong>Apply</strong>&nbsp;
              </a>
              here from {walkInDateStart}.
            </p>
            <div className="container">
              <table className="table" style={{ backgroundColor: "#e3f2fd" }}>
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
                </tbody>
              </table>
            </div>
            <p className="general-text">
              * Please find the URL that has instructions and process that need
              to be followed to take the exam. &nbsp;
              <a
                href="https://online.cbexams.com/RPS/MSIT/Default.aspx"
                className="links "
              >
                Exam Instructions
              </a>
            </p>
            <p className="general-text">
              * Practice Tests :
              <a
                href=" https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx"
                className="links "
              >
                Test Link
              </a>
            </p>

            {/* GAT Info */}
            <h5 className="title">
              <strong>Regular GAT</strong>
            </h5>
            <p className="general-text">
              Regular Entrance Test is conducted from {gatExamDate}. Candidates
              can apply for this test online
              <a
                href="https://www.msitprogram.net/admissions/"
                className="links "
              >
                &nbsp;<strong>Apply</strong>&nbsp;
              </a>
            </p>
            <div className="container">
              <table className="table" style={{ backgroundColor: "#e3f2fd" }}>
                <tbody>
                  <tr>
                    <td>
                      Last date for applying for Regular GAT Entrance (online)
                    </td>
                    <td>{gatApplyLastDate}</td>
                  </tr>
                  <tr>
                    <td>
                      Regular GAT Entrance (online) Examination is conducted on
                    </td>
                    <td>{gatExamDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* GRE Info */}
            <h5 className="title">
              <strong>Entrance test waived</strong>
            </h5>
            <p className="general-text">
              <strong>GRE:</strong> Candidates who have taken the GRE after July
              2016 are exempted from the entrance test (GAT) if they have a
              score of 301/3.5
            </p>
          </div>

          <hr />

          {/* How to apply */}
          <div id="HowToApply">
            <h1 className="pb-4 title">
              <strong>How To Apply?</strong>
            </h1>
            <p className="general-text">
              Admissions are based on ranks obtained in the entrance exam called
              Graduate Aptitude Test (GAT). Graduate Aptitude Test (GAT) will be
              conducted by CIHL in two ways:
            </p>

            <h5 className="title ">
              <strong>Walk-in Entrance test:</strong>
            </h5>
            <p className="general-text">
              Candidates have the option to choose the date of the exam
            </p>

            <h5 className="title ">
              <strong>Regular GAT Entrance test:</strong>
            </h5>
            <p className="general-text">Exam is conducted on a fixed date.</p>

            <p className="general-text">
              Due to the COVID-19 situation the Graduate Aptitude Test (GAT),
              both Walk- in Entrance and Regular GAT Entrance are conducted
              online i.e. candidates can take the test from home. Hence
              candidates can stay home and stay safe.
            </p>
            <p className="general-text">
              After applying online, pay Rs.1000/- by using Credit / Debit card
              or net banking from our website ( www.msitprogram.net ). The fee
              paid is not refundable.
            </p>
            <hr />
          </div>

          {/* Walkin Process */}
          <div id="WalkinProcess">
            <h1 className="pb-4 title">
              <strong>Walk in Process</strong>
            </h1>
            <p className="general-text">
              From 2006 admissions onwards, MSIT has introduced the "Walk-in
              Entrance" (now from home itself). This is planned for the
              convenience of the students where the students have an opportunity
              to take the MSIT entrance exam, whenever he/she is confident of
              taking the exam.
            </p>
            <h5 className="title">
              <strong>
                Walk-in Entrance Test (now online and from home itself):
              </strong>
            </h5>
            <p className="general-text">
              Candidates have the option to choose the date of the exam. Walk-in
              entrance test can be taken on your convenient date and time
              between May 15<sup>th</sup> to June 26<sup>th</sup>. But only
              once. A slot from 10 AM to 11AM OR 2.00PM to 3 PM on any day
              between May 15
              <sup>th</sup> to June 26<sup>th</sup> can be opted. A non-
              refundable amount of Rs.1000 has to be paid through online by
              Credit / Debit card or net banking from our
              website(www.msitprogram.net).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
