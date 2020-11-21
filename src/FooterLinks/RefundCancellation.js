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
        <div id = "top">
            <HeaderTitle name = "Refund/ Cancellation"/>
            <div className="container RefundCancellation Justify-content-center">
                <div className = "col news" style={{height:"auto", padding:"40px", marginTop:"20px" }}>
                    <div className="col-12" id ="para">
                    <h1 style={{color:"rgb(119, 11, 11)",paddingBottom:"10px"}}>Refund/Cancellation</h1>
                        <p>It is specifically made clear that MSIT program offers its services to you only if you are agreeable to all terms of this refund and cancellation policy in its entirety along with the terms and conditions of use. In any event, our refund/cancellation policy, stated in the following paragraphs, will apply.</p>
                        <ul>
                            <li>The service offered on this website, once availed, cannot be cancelled under any circumstances.</li>
                            <li>The exam fees being collected through this website is non-refundable.</li>
                            <li>Any payment processing fee or other such charges levied by the payment gateway provider or by the use of credit/debit card is non-refundable.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default App;