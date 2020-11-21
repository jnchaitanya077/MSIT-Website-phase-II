import React from "react";
import "../css/staff.css";
import avatar from "../images/faculty/IT/images.png";
import HeaderTitle from "../components/headerImage";
import Info from "../components/Infocard.js";

// Can import images in two ways
// 1.Import the image and just place it in the List.
// 2.Use require to import directly without.
//example:
// image: require("../images/faculty/IT/avatar.jpeg"),

const SSstaff = [
  {
    id: 1,
    name: "Mrs Shanti Devulapalli",
    image: require("../images/faculty/IT/Shanthi.jpg"),
    position: "Manager (Skill Development)",
    email: "shanti@msitprogram.net",
  },
  {
    id: 2,
    name: "K Venkateswara Rao",
    image: require("../images/faculty/IT/15570.Venkat.jpg"),
    position: "Soft Skills Mentor",
    email: "venkat.k@msitprogram.net",
  },
  {
    id: 3,
    name: "Poolla Vaidehi",
    image: require("../images/faculty/IT/Vydehi.jpg"),
    position: "Soft Skills Mentor",
    email: "vydehi@msitprogram.net",
  },
  {
    id: 4,
    name: "Nirupama B",
    image: require("../images/faculty/IT/5728.nirupama.jpg"),
    position: "Soft Skills Mentor",
    email: " nirupama.beesabathuni23@msitprogram.net",
  },
  {
    id: 5,
    name: "K Vani",
    image: require("../images/faculty/IT/23077.VaniReddy.jpg"),
    position: "Soft Skills Mentor",
    email: "vanik6.reddy@msitprogram.net",
  },
  {
    id: 6,
    name: "Ch Sunita Prasad",
    image: require("../images/faculty/IT/Sunitha_prasad.jpg"),
    position: "Soft Skills Mentor",
    email: "sunitacrc@msitprogram.net",
  },
  {
    id: 7,
    name: "Savitha Menon",
    image: require("../images/faculty/IT/savitha (1).jpg"),
    position: "Soft Skills Mentor",
    email: "savitha.menon@msitprogram.net",
  },
  {
    id: 8,
    name: "G Srujana",
    image: require("../images/faculty/IT/Srujana.jpg"),
    position: "Soft Skills Mentor",
    email: "srujana.gankidi@msitprogram.net",
  },
  {
    id: 9,
    name: "Jackson Boaz Jessie",
    image: require("../images/faculty/IT/Jackson Photo.jpg"),
    position: "Soft Skills Mentor",
    email: "boazjackson88@msitprogram.net",
  },
  {
    id: 10,
    name: "YM Shailaja",
    image: require("../images/faculty/IT/YM Shailaja.jpg"),
    position: "Soft Skills Mentor",
    email: "mehershailaja@msitprogram.net",
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
        <HeaderTitle name="Soft-Skills" />
        <div className="row main-body pt-5">
          <p className="general-text">
            There are Associate Mentors for Soft skills in MSIT who mentor the
            students throughout their course. It follows a pattern of mentor
            student ratio of 1:10. The Resource Principal Mentor is responsible
            for creating the content, generating and delivering it to the
            students according to their learning needs which includes lectures
            and organizing other activities. The writing assignments, weekly
            presentations are conducted by the Associate Mentors and each
            learning centre has course coordinators in addition, to ensure the
            smooth running of the program. Resources are gathered from numerous
            learning sources and integrated into the program.
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
