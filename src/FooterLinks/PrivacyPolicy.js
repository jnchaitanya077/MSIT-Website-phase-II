import React from "react";
import { removeData } from "jquery";
import HeaderTitle from "../components/headerImage.js"
import { Link } from "react-router-dom";

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
    return(
        <div id = "top">
            <HeaderTitle name = "Privacy Policy"/>
            <div className="container PrivacyPolicy Justify-content-center">
                <div className = "col news" style={{height:"auto", padding:"40px",  marginTop:"20px"}}>
                    <div className="col-12" id ="para">
                    <h1 style={{color:"rgb(119, 11, 11)",paddingBottom:"10px"}}>Privacy Policy</h1>
                        <p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information.</p>
                        <p>CIHL does not have digital certificate which means all student application information will be communicated through http protocol, CIHL does not follow public key infrastructure. MSIT admission application does not have login interface for students. MSIT admissions and accounts department is authenticated to access msitprogram.net database. CIHL follows secure authentication strings in all the administration related cgi scripts. Msitprogram.net is located inside the University campus. CIHL does not encrypt communication related to admissions. CIHL collects personally identifiable information for admission procedures and does not communicates information to anyone else except the learning centers. After admissions all MSIT students are enrolled to the host Universities. Learning centers award the final degree "Master of Science in Information Technology".</p>
                        <p>Msitprogram.net has a common application interface where in the applicants can check their hall tickets status, rank, call letters for counseling by providing their application number. All msitprogram.net form are accessible in popular web browsers, because we do not have login interface web application does not store any student privacy preferences. CIHL does not use third party advertisement, except in msitprogram.net which is static in nature.</p>
                        <p>Msitprogram.net does not store http cookies or any other application related cookies in the applicant computer. Msitprogram.net does not collect financial information, health information, and current location of the student, social security number or Govt. IDs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default App;