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
    render()  {   
    return(
        <div id ="top">
            <HeaderTitle name = "Terms and Conditions"/>
            <div className="container TermsAndConditions Justify-content-center" >
                <div className = "col news" style={{height:"auto", padding:"40px", marginTop:"20px" }}>
                    <div className="col-12" id ="para">
                    <h1 style={{color:"rgb(119, 11, 11)",paddingBottom:"10px"}}>Terms and Conditions</h1>
                        <p>CIHL admission system considers only confirmed student application for entrance exam. A candidate’s application in only confirmed after payment of application fee, non confirmed applications will not be considered for entrance exam. The application fee paid by the applicant is nonrefundable. Consortium of Institutions of Higher Learning uses this application money to conduct entrance exam at various exam centers and for counseling process. Consortium of Institutions of Higher Learning does not refund the application fee even if the applicant does not attend the entrance exam.</p>
                        <p>MSIT has adapted the online payments considering students’ difficulties related to postal delays, bank holidays, last date of applying etc. and other reasons. Any payment gateway provider will have to inform MSIT program accounts department of all applicants who paid their application fee online. We need information such as application number, student name, mobile, billing address to confirm and verify application status.</p>
                        <p>All payment gateway providers will have to provide details of applicants who paid the application fee. MSIT admission program will not verify the credit/debit card ownership details. All failed transactions status remain as not confirmed. MSIT admissions system is capable of identifying duplicate or repeated applicants unless applicants provide wrong information. System is capable of restricting repeated entries. If an applicant somehow applies twice it is considered as new application.</p>
                        <p>We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default App;