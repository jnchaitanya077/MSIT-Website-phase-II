import React from "react";
// import "../css/AboutMsit.css";
import HeaderTitle from "../components/headerImage.js";
// import Gat from "../images/logos/gat.PNG";
// import Syllabus from "../images/logos/syllabus_table.jpg";

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
  render()  { 
  return (
    <div id ="top">
      <HeaderTitle name="FAQ's" />
      <div class="newsLayout">
        {/* <div class="row ">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="author-header p"> */}
        <h1 className="preview">Frequently Asked Questions</h1>
        <p>
          <strong>
            1. What are the learning Centers for 2020?
            <br />
          </strong>
          The Learning Centers for the academic year 2020 are:
          <br />
          <ol list-type-position="inside">
            <li>
              MSIT division, International Institute of Information Technology,
              Hyderabad (160 Seats)
            </li>
            <li>
              School of IT, Jawaharlal Nehru Technological University,
              Kukatpally, Hyderabad (140 Seats)
            </li>
            <li>
              College of Engineering, Jawaharlal Nehru Technological University,
              Kakinada, (50 Seats)
            </li>
            <li>
              College of Engineering, Jawaharlal Nehru Technological University,
              Anatapur, (50 Seats)
            </li>
          </ol>
          <strong>2. How Do I directly apply for stage II?</strong>
          <br />
          If you have acceptable GRE and TOEFL or IELTS scores, you can mention
          your scores and apply online. You would be sent a hall ticket for
          Counselling in the Second Stage.
          <br />
          <br />
          <strong>3. How is the entrance test conducted?</strong>
          <br />
          The entrance test consists of two stages:
          <br />
          <strong>Stage I:</strong> 2-yr MSIT Graduate Aptitude Test (GAT) These
          are computer based tests.
          <br />
          <strong>Stage II:</strong>
          <br />
          <ol list-type-position="inside">
            <li>
              Listening Comprehension Test Exemption for students with
              qualifying TOEFL score.
            </li>
            <li>
              Interview MSIT
              <br />
              Candidates qualifying in Stage II will enter the Preparatory
              programme for 8 weeks. Only those candidates successfully
              completing the Preparatory programme will move into the 2 year
              MSIT programme.
            </li>
          </ol>
          <strong>4. Who can Take Walkin Entrance ?</strong>
          <br />
          B.Tech / B.E (All branches)
          <br />
          <br />
          <strong>5. How many times can I take the Walk-in test ?</strong>
          <br />
          Walk-in entrance test can be taken maximum two times, but a time gap
          of one week should be there between any two successive attempts.
          <br />
          <br />
          <strong>
            6. Can I take both walkin and General Entrance Tests ?
          </strong>
          <br />
          Yes. You can apply online for General Entrance Test(i.e. GAT) and also
          can take walkin.
          <br />
          <br />
          <strong>
            7. Would the best score be considered for counselling ?
          </strong>
          <br />
          Yes.
          <br />
          <br />
          <strong>8. Who will award the degree?</strong>
          <br />
          The degree is awarded by the university where the learning center is
          located.
          <br />
          <br />
          <strong>9. Is the course approved by universities/AICTE?</strong>
          <br />
          Yes. The MSIT degree is issued by an university, and is recognized by
          them.
          <br />
          <br />
          <strong>
            10. Do I have a choice regarding the campus at which I will pursue
            the program or you will allot it?
          </strong>
          <br />
          You would be given a rank prior to the counselling. You can choose the
          seat depend on the availability of seats in that center during the
          counselling.
          <br />
          <br />
          <strong>
            11. Is it possible to get teaching assistantships/Internships?
          </strong>
          <br />
          Yes. The TA and internships would be offered in the second year based
          on the performance of the student in the first year.
          <br />
          <br />
          <strong>12. Does MSIT have hostel facility?</strong>
          <br />
          Hostel facility depends on the learning center offering this course.
          <br />
          <br />
          <strong>
            13. Does MSIT provide support for obtaining bank loans?
          </strong>
          <br />
          Yes. We do help students to obtain bank loans by providing required
          documents for loan processing.
          <br />
          <br />
          <strong>
            14. Is there any minimum percentage required for admissions?
          </strong>
          <br />
          No. However, they have to pass in the qualifying examination.
          <br />
          <br />
          <strong>
            15. Are there any placements after completion of the course?
          </strong>
          <br />
          Yes. Placements will be taken care of by the placement cell in the
          Learning Center. As placements will be provided for other courses, so
          also for this course. Along with this, CIHL also has a seperate
          placement cell, which allows only MSIT students in all the learning
          centers to participate. Actual employment depends on student's
          performance
          <br />
          <br />
        </p>
      </div>
    </div>
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
}
}

export default App;
