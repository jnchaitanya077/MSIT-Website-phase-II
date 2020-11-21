import React from "react";
import "../css/admissions.css";
import HeaderTitle from "../components/headerImage.js";
import {
  IIITH_REG,
  JNTUH_REG,
  JNTUK_REG,
  SVU_REG,
  IIITH_PLACED,
  JNTUH_PLACED,
  JNTUK_PLACED,
  SVU_PLACED,
} from "./num_of_placements.js";
import Companies from "../images/placements/Companies.jpg";

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
        <HeaderTitle name="MSIT Placements " />
        {/* Bootstrap model build */}
        {/* <div class="content"> */}
        <div class="newsLayout">
          <div class="row ">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="post-holder">
                {/* author block class to form a border around the content */}
                <div class="author-block">
                  <div class="author-content">
                    <div class="author-header p">
                      <h1 className="preview">
                        <strong>MSIT Placements</strong>
                      </h1>
                      <h5 class="author-title" style={{ color: "#0a3dab" }}>
                        <strong>
                          Placement details for the Batch 2017 – 2019
                          (Placements in progress at IIIT-H and JNTU-H )
                        </strong>
                      </h5>
                      <ol list-type-position="inside">
                        <li>
                          No. of Students Registered for the Placements at
                          IIITH, JNTUH, JNTUK & SVU - 203
                        </li>
                        <li>No. of Students placed - 187</li>
                      </ol>
                      <h5 style={{ color: "#0a3dab" }}>
                        <strong>Major Companies that visited MSIT</strong>
                      </h5>
                      <p className="general-text">
                        Amazon, Apple India Pvt. Ltd., IBM ISL, Huawei
                        Technologies India Pvt. Ltd., TechMojo, Tata Consultancy
                        Services, Value Momentum, Nutanix Technologies, Johnson
                        Controls, GE Digital, PayTM, MAQ Software, Dupont, F5
                        Software Solutions, Trade Vigil, Inside View, ZOHO,
                        Saven Technologies, Gramener, CDAC, Semantic
                        Bits,Teradata, Progress, Gathi Analytics, Mathworks,
                        Mutual Mobile,IBM Global Business Services, Host
                        Analytics, MedPlus, HSBC, American Express, GE India,
                        AVI Network, EPAM, Innominds.
                      </p>

                      <h5 style={{ color: "#0a3dab" }}>
                        <strong>
                          Placements details for the Batch 2016 – 2018
                        </strong>
                      </h5>

                      <div className="container">
                        <table
                          className="table"
                          style={{ backgroundColor: "#e3f2fd" }}
                        >
                          <tbody>
                            <tr>
                              <td>No.of students registered for placements</td>
                              <td>{IIITH_REG}</td>
                              <td>{JNTUH_REG}</td>
                              <td>{JNTUK_REG}</td>
                              <td>{SVU_REG}</td>
                            </tr>

                            <tr>
                              <td>No.of students placed</td>
                              <td>{IIITH_PLACED}</td>
                              <td>{JNTUH_PLACED}</td>
                              <td>{JNTUK_PLACED}</td>
                              <td>{SVU_PLACED}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="general-text">
                        MSIT programme adds great value to its students' career
                        path and this is reflected in the placements as it
                        produces "employable students". Students can avail
                        themselves of the placement opportunities in their
                        respective Learning Centers. CIHL also helps in the
                        placement activity. Major companies that visited MSIT
                        and packages offered from 29 lakhs to 3.5 lakhs per
                        annum.
                      </p>
                      <img src={Companies} className="center2" />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default App;
