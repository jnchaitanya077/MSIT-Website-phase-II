import React from "react";
import "../css/staff.css";
import Info from "../components/Infocard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../components/headerImage";
import avatar from "../images/faculty/IT/images.png";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.
//example:
// image: require("../images/faculty/IT/avatar.jpeg"),

const ITstaff = [
  {
    id: 1,
    name: "Dr. Lynn Robert Carter",
    image: require("../images/faculty/IT/12451.carter.jpg"),
    position: "Associate Teaching Professor",
    email: "lynnrobertcarter@gmail.com",
  },
  {
    id: 2,
    name: "Praveen Garimella",
    image: require("../images/faculty/IT/Praveen_optimized.jpg"),
    position: "Resource Principal Mentor",
    email: "praveeng1503@gmail.com",
  },
  {
    id: 3,
    name: "M Manjunath Kumar",
    image: require("../images/faculty/IT/Manjunath_optimized.jpg"),
    position: "Resource Principal Mentor",
    email: "manjunath@msitprogram.net",
  },
  {
    id: 4,
    name: "Dr. P. Arun Kumar",
    image: require("../images/faculty/IT/420899957.arunk.jpg"),
    position: "Resource Principal Mentor",
    email: "arunkparayatham@yahoo.com",
  },
  {
    id: 5,
    name: "P Mohana Krishna",
    image: require("../images/faculty/IT/Mohan_Krishna_New.jpg"),
    position: "Resource Principal Mentor",
    email: " mohanakrishnap@gmail.com",
  },
  {
    id: 6,
    name: "S.Veerabadraiah",
    image: require("../images/faculty/IT/Veerusir.jpg"),
    position: "Principal Mentor",
    email: "veerabadra2008@gmail.com",
  },
  {
    id: 7,
    name: "Sridevi K",
    image: require("../images/faculty/IT/382929675.sridevi.jpg"),
    position: "Associate Mentor",
    email: "sridevi.kattari@gmail.com",
  },
  {
    id: 8,
    name: "K. Srirama Murthy",
    image: require("../images/faculty/IT/Sriram_murthy.jpg"),
    position: "Associate Mentor",
    email: "sriram.pavani@gmail.com",
  },
  {
    id: 9,
    name: "T Madhusudhan Reddy",
    image: require("../images/faculty/IT/madhutavva.jpg"),
    position: "Associate Mentor",
    email: "madhu.tavva@gmail.com",
  },
  {
    id: 10,
    name: "R Satyanarayana",
    image: require("../images/faculty/IT/Satya.jpg"),
    position: "Associate Mentor",
    email: "satyawin007@gmail.com",
  },
  {
    id: 11,
    name: "B Renuka",
    image: require("../images/faculty/IT/13045.RenukaBandi.jpg"),
    position: "Associate Mentor",
    email: "renukabandi.7@gmail.com",
  },
  {
    id: 12,
    name: "N D V Siva Sankar",
    image: require("../images/faculty/IT/Siva_shankar.jpg"),
    position: "Associate Mentor",
    email: "sivashankar@msitprogram.net",
  },
  {
    id: 13,
    name: "V Lakshmi Kanth",
    image: require("../images/faculty/IT/V_Lakshmikanth.jpg"),
    position: "Assistant Mentor",
    email: "lakshmikanth@msitprogram.net",
  },

  {
    id: 14,
    name: "Shahi Rehana Begum",
    image: require("../images/faculty/IT/rehana1.jpg"),
    position: "Assistant Mentor",
    email: "rehana@msitprogram.net",
  },
  {
    id: 15,
    name: "Santosh Kumar Miryala",
    image: require("../images/faculty/IT/Santhosh_Miryala.jpg"),
    position: "Assistant Mentor",
    email: "miryala.santosh0437@gmail.com",
  },
  {
    id: 16,
    name: "V Laxmi Narayana Murthy",
    image: require("../images/faculty/IT/Murthy.jpg"),
    position: "Assistant Mentor",
    email: "murthyvemuri@msitprogram.net",
  },
  {
    id: 17,
    name: "Deepak kumar Reddy",
    image: require("../images/faculty/IT/Deepak_kumar.jpg"),
    position: "Assistant Mentor",
    email: "deepakbhimavarapu@msitprogram.net",
  },
  {
    id: 18,
    name: "A Manasa",
    image: require("../images/faculty/IT/Manasa_A.jpg"),
    position: "Assistant Mentor",
    email: "manasaalisetty@msitprogram.net",
  },
  {
    id: 19,
    name: "K Rajesh",
    image: require("../images/faculty/IT/Rajesh_k.jpg"),
    position: "Assistant Mentor",
    email: "k.rajeshkumar@msitprogram.net",
  },
];

class person extends React.Component {
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
        <HeaderTitle name="IT-Staff" />
        <div className="row main-body pt-5">
          <p className="general-text">
            There are associate mentors, physically available for the students,
            to guide them through all the courses. MSIT maintains a
            student:mentor ratio of less than 10:1. i.e. for every 10 students
            there is one mentor available. There are domain experts, who create
            the course content and are called principal mentors. Apart from
            this, each learning center has a course coordinator, who is a
            computer science professor in the department. The students also have
            access to digital lectures from various renowned professors world
            wide. We try to pick the best lectures available in the domain and
            deliver it to the students.
          </p>
          <div className="card-deck">
            {ITstaff.map((info) => {
              return (
                <Info
                  image={info.image}
                  name={info.name}
                  position={info.position}
                  email={info.email}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default person;
