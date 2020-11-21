import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage.js";
import LeftGrid from "../components/gridLeft.js";
import Dean from "../images/faculty/Dean/Dean_cropped.jpg";

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
        <HeaderTitle name="Dean" />
        <LeftGrid
          id="DeanPage"
          image={Dean}
          name="Dr. M. Sreenivasa Rao"
          qualification="Phd."
          subtitle="DEAN, MSIT Programme"
          body="There are associate mentors physically available for the students to
            guide them through all the courses. MSIT maintains a student:mentor
            ratio of less than 10:1. i.e. for every 10 students there is one
            mentor available. There are domain experts, who create the course
            content and are called Principal Mentors. Apart from this, each
            learning center has a Course Coordinator, who is a Computer Science
            Professor in the department. The students also have access to
            digital lectures from various renowned professors world wide. We try
            to pick the best lectures available in the domain and deliver it to
            the students."
        />
      </div>
    );
  }
}

export default App;
