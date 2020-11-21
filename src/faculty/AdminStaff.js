import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage";
import avatar from "../images/faculty/IT/6702.1091.noimage.jpg";
import Info from "../components/Infocard.js";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.
//example:
// image: require("../images/faculty/IT/avatar.jpeg"),

const SSstaff = [
  {
    id: 1,
    name: "K Chenchu Ramaiah",
    image: require("../images/faculty/IT/1265653570.RAMAIAH.jpg"),
    position: "A & AO",
    email: "kcr@msitprogram.net",
  },
  {
    id: 2,
    name: "Ravi Vasireddy",
    image: require("../images/faculty/IT/1899658728.Ravi.jpg"),
    position: "Manager HR",
    email: "hrm@msitprogram.net",
  },
  {
    id: 3,
    name: "T.V.Devi Prasad",
    image: require("../images/faculty/IT/devi_prasad.jpg"),
    position: "Placement Manager",
    email: "testname123@msitprogram.net",
  },
  {
    id: 4,
    name: "N.A.Swamy",
    image: avatar,
    position: "Sr.System Admin",
    email: "swamy2k1@gmail.com",
  },
  {
    id: 5,
    name: "N Venu",
    image: require("../images/faculty/IT/Venu.jpg"),
    position: "Accounts Asst",
    email: "venu.n@msitprogram.net",
  },
  {
    id: 6,
    name: "P Hari Krishna",
    image: require("../images/faculty/IT/26682.harikrishna_p.jpg"),
    position: "System Administrator",
    email: "hari.p@msitprogram.net",
  },
  {
    id: 7,
    name: "Kumara Swami Medi",
    image: require("../images/faculty/IT/kumara_swamy.jpg"),
    position: "Office Assistant",
    email: "medi.kumaraswamy@msitprogram.net",
  },
  {
    id: 8,
    name: "Muniganti Prasad",
    image: avatar,
    position: "Office Assistant",
    email: "munigantiprasad07@gmail.com",
  },
  {
    id: 9,
    name: "Kiran Kumar",
    image: avatar,
    position: "Placement Assistant",
    email: "kirandec333@gmail.com",
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
        <HeaderTitle name="Admin-Staff" />

        <div className="row main-body pt-5">
          <p className="para">
            The CIHL (Consortium of Institutions of Higher Learning) coordinates
            the MSIT program and ensures its smooth run between the leaning
            centres of IIIT and JNTU. The support of the active administrative
            staff which includes the Network Administrators, Systems
            Administrators, Accounts and Office Administration, HR Management
            and Office Management staff through person and resources, are a
            great backing for us.
          </p>
          <div className="card-deck">
            {SSstaff.map((info) => {
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
