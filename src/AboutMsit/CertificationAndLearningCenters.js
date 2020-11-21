import React from "react";
import HeaderTitle from "../components/headerImage.js";
import { Link } from "react-router-dom";

import "../css/Certification.css";
import LearningCenters from "../components/LearningCenters.js";

const learningCenters = [
  {
    university: "IIIT - Hyderabad",
    link: "https://iith.ac.in/",
    fullLink: "https://www.iiit.ac.in/academics/msit/",
    body:
      "IIIT, Hyderabad has been established in 1998. Ever since its inception it has achieved remarkable goals and contributed significantly to R&D. IIIT has a sprawling campus of 62 acres and is located in Gachibowli. Some of the most renowned seats of learning like ISB, HCU are located in a radius of 4 km from IIIT. IIIT has various tie-ups with national and internationals institutes. These include Carnegie Mellon University, Massachusetts Institute of Technology, University of Pennsylvania, University of Washington to name a few. In IIIT there are various research centers that are autonomous, yet working in concert with each other. The major research centers at IIIT are in the areas of Bio Informatics, Computer Vision, Data Engineering, Language Technologies and Robotics. MSIT programme was started in IIIT in 2001 and batches were inducted in 2002 - 2004. ",
  },
  {
    university: "JNTU - Hyderabad",
    link: "http://jntuh.ac.in",
    fullLink: "http://sit.jntuh.ac.in/cmu",
    body:
      "Under a broad policy framework of providing new technological education required for the industrial growth of the country in general and more particularly for the State of Andhra Pradesh,Jawaharlal Nehru Technological University was established on 2nd October, 1972, by an act of State Legislature. On its formation, the Government Engineering Colleges at Anantapur, Kakinada and Hyderabad, became its Constituent Colleges. The first two colleges were established in 1946 and last one in 1965. MSIT Programme is offered in the School of IT in the University campus in Kukatpally, Hyderabad. This programme was started in JNTU in 2001. MSIT center in the School of IT has state of the art Infrastructure. The Lab is open 24x7x365 with a 2 MBPS Internet Connection and the labs are designed to provide an environment that matches the very best in the field. There are labs exclusively earmarked for MSIT students at JNTU. ",
  },
  {
    university: "JNTU - Kakinada",
    link: "http://jntuk.edu.in/",
    fullLink:
      "https://www.jntuk.edu.in/master-of-science-in-information-technology/",
    body:
      'Jawaharlal Nehru Technological University (JNTU), Kakinada was set up in 1946 as a public university. JNTU, Kakinada at the time of its establishment was known as The College of Engineering, Visakhapatnam. It is located near the East Godavari district, north of the Indian state of Andhra Pradesh. JNTU, Kakinada is one of the leading universities that majorly focus on the engineering domain. The university has been affiliated by the National Assessment and Accreditation Council (NAAC) of the University Grants Commission (UGC) with an "A" grade.',
  },
  {
    university: "JNTU - Anantapur",
    link: "http://jntua.ac.in",
    fullLink: "https://www.jntua.ac.in/",
    body:
      "JNT University Anantapur was established in 2008 through A.P. Govt. Act NO.30 and has started functioning from the 155 acre campus of one of its Constituent Colleges at Anantapur. Since its inception, JNTUA is committed to develop and nurture Technical Education System in the four districts of Rayalaseema viz., Anantapur, Chittoor, YSR, Kurnool districts and SPSR Nellore district by producing technical manpower of high quality comparable to the best in the world. The University is working towards the vision of producing quality technical graduates, competent teachers, scientists and leaders in the academics, research, industry and administration. University aims to beranked among the top technological universities globally by virtue of the quality of its academic programs. JNT University Anantapur is a dream destination for those who wish to be the best in the domain of Technology and Management.",
  },
  {
    university: "SV University,Tirupati",
    link: "https://svuniversity.edu.in/",
    fullLink: "https://www.svuniversity.edu.in/",
    body:
      "Sri Venkateswara University, Tirupati (SVU), is established in 1954 in the world famous holy temple town of Tirupati on the sprawling campus of 1000 acres. Teaching, research and extension activities in different subjects have been emphasized by the University right from its inception. ",
  },
];

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
        {/* Header Title */}
        <HeaderTitle name="Certification & Learning Centers" />
        {/* <!-- blog-single  --> */}
        <div className="newsLayout">
          {/* <!-- text column--> */}

          <div className="col-12" id="para">
            <div
              className="shadows-courses p-4 mb-3"
              style={{ height: "auto" }}
            >
              <h3 className="title-text">Certification</h3>
              <p className="general-text">
                MSIT is a 2 year Postgraduate program offered by a consortium of
                universities. Each university offers the course in its learning
                centers with the state of the art infrastructure and similar
                content. Students get admitted into the programme based on their
                scores in the entrance exam GAT. After completion of the course
                for two years the host university awards the degrees. For
                example, if a student belongs to JNTUH, JNTUH would award the
                Master’s degree and similarly if it is IIIT-H, IIIT-H University
                would award the MSIT degree.
              </p>
            </div>

            <div
              className="shadows-courses  p-4 mb-3"
              style={{ height: "auto" }}
            >
              <h3 className="title-text">Learning Centers</h3>
              <p className="general-text">
                The Learning Centers where this programme is being offered are
                shown below in the table along with the progammes that they
                offer and the number of seats available.
              </p>

              <table>
                <tr
                  className="table-color"
                  style={{ backgroundColor: "#757070", color: "white" }}
                >
                  <th>S.No</th>
                  <th>Learning Center</th>
                  <th>University</th>
                  <th>Intake</th>
                </tr>

                <tr className="table-color">
                  <td>1</td>
                  <td>
                    <Link
                      to="/CertificationAndLearningCenters/#section1"
                      className="links-alignment links"
                    >
                      International Institute of Information Technology (IIIT)
                    </Link>
                  </td>
                  <td>
                    IIIT is a deemed University at Gachibowli, Hyderabad,
                    Telangana
                  </td>
                  <td>110</td>
                </tr>

                <tr className="table-color">
                  <td>2</td>
                  <td>
                    <Link
                      to="/CertificationAndLearningCenters/#section2"
                      className="links-alignment links"
                    >
                      School of Information Technology, JNTU, Kukatpally
                    </Link>
                  </td>
                  <td>
                    Jawaharlal Nehru Technological University, Hyderabad,
                    Telangana
                  </td>
                  <td>100</td>
                </tr>

                <tr className="table-color">
                  <td>3</td>
                  <td>
                    <Link
                      to="/CertificationAndLearningCenters/#section3"
                      className="links-alignment links"
                    >
                      JNTU Kakinada
                    </Link>
                  </td>
                  <td>
                    Jawaharlal Nehru Technological University Kakinada, Andhra
                    Pradesh
                  </td>
                  <td>50</td>
                </tr>

                <tr className="table-color">
                  <td>4</td>
                  <td>
                    <Link
                      to="/CertificationAndLearningCenters/#section4"
                      className="links-alignment links"
                    >
                      JNTU Anantapur
                    </Link>
                  </td>
                  <td>
                    Jawaharlal Nehru Technological University Anantapur, Andhra
                    Pradesh
                  </td>
                  <td>50</td>
                </tr>

                <tr className="table-color">
                  <td>5</td>
                  <td>
                    <Link
                      to="/CertificationAndLearningCenters/#section5"
                      className="links-alignment links"
                    >
                      SV University Tirupati
                    </Link>
                  </td>
                  <td>Sri Venkateswara University Tirupati, Andhra Pradesh</td>
                  <td>50</td>
                </tr>
              </table>
            </div>

            <h2 style={{ marginBottom: "2%", marginTop: "2%" }}>
              Want to know something about Universities ? Go ahead{" "}
            </h2>

            {learningCenters.map((info) => {
              return (
                <LearningCenters
                  university={info.university}
                  link={info.link}
                  fullLink={info.fullLink}
                  body={info.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
