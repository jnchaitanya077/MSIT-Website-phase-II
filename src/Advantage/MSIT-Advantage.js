import React, { Fragment } from "react";
import HeaderTitle from "../components/headerImage.js";
import RightGrid from "../components/Right_advantage.js";
import LeftGrid from "../components/Left_advantage.js";
import LBD from "../images/advantage/learn1.jpg";
import PCC from "../images/advantage/pcc1.jpg";
import SS from "../images/advantage/ss.jpg";
// import Resources from "../images/faculty/IT/ss.jpg";
import Infrastructure from "../images/advantage/infrastructure1.jpg";
import Infrastructuretwo from "../images/advantage/infrastructure2.jpg";
import "../css/advantage.css";

const info = [
  {
    id: 1,
    idName: "LearningByDoing",
    name: "Learning By Doing",
    image: LBD,
    body:
      "The methodology of “Learning By Doing” is a unique one adopted by MSIT. It aims at giving hands - on experience which helps the students understand the practical implementation aspects and the concepts associated with it. MSIT’s “Learning by Doing” method involves learning in a project-centric way. This helps students to solve problems by applying concepts. Each course is broken into manageable modules each of which is offered as a project to be worked on. Students work in teams with a corporate-like environment. The students understand the concept while working on the project and submit the relevant tasks (deliverables) within the deadline specified by their mentors. The students get the required guidance and support at every level from the mentors who have a wide knowledge base which enhances the knowledge of the students. Each course is offered by a principal mentor and the student: mentor ratio at MSIT stands out to be 10:1 giving enough scope for the students to interact with their mentor whenever required. Personalized mentoring at MSIT aims at nurturing the students in every way. Students are given individual workstations with laptops and 24x7 internet facilities. Rich digital content with strong audio-visual support alongside constant mentoring provides them with the necessary platform, with lectures by eminent people also. Therefore, MSIT students gain hands-on experience from innovative learning solutions.",
  },
  {
    id: 2,
    idName: "ProjectCenteredCurriculum",
    name: "Project Centered Curriculum",
    image: PCC,
    body:
      "Project centric curriculum offers practical hands on experience to master the implementation aspects of the concepts related to each course. Each course is broken into manageable modules each of which is offered as a project to be worked on. Students work in teams with a corporate like environment. The students understand the concept while working on the project and submit the relevant tasks (deliverables) within the deadline specified by their mentors. The students get the required guidance and support at every level from the mentors who have a wide knowledge base which would be helpful for the growth of students. For example, if a student is being offered a course on data structures, he would be asked to work on a project like ‘Mini Google search engine’ which would enable them to understand the various algorithms involved and assimilate the underlying concepts to develop this project. Another simulation is, for the Networks course they need to come up with a File Protocol and similarly for the Database course ‘Airline Reservation System’. In addition to this, Concept tests, Programming Concepts and Quizzes are held. Therefore, MSIT students gain hands-on experience while conditioning themselves, and looking for innovative learning solutions.",
  },
  {
    id: 3,
    idName: "SoftSkills",
    name: "Soft Skills",
    image: SS,
    body:
      "In a rapidly changing work environment which is technology- driven and customer oriented in an information based economy, the reliance on Soft Skills is more relevant than ever. The training is spread throughout the year and not just limited to a few days. In-house training to develop LSRW (Listening, Speaking, Reading, Writing) skills, life skills training by corporate professionals and rich digital content (e-modules) represent the threefold approach adopted by MSIT. Presentations, Group Discussions and Debates are given for weekly assessment. These are conducted by a mediator/facilitator, a Soft skills mentor who evaluates and critically analyses them and gives feedback while also providing tips for self-improvement. Also played are lectures by eminent speakers on life skills, motivational videos, apart from Role-Plays being conducted, to enable the students to face life boldly. Hence, a comprehensive Soft skills training turns the student to an effective solution provider. The latest inclusion is of theater based soft skills training methodology through which the students get acquainted with the essential business etiquette skills. They are given the freedom to think creatively and the aspect of logical as well as critical thinking is enhanced through role plays.",
  },
  {
    id: 4,
    idName: "ResourcesForStudents",
    name: "Resources For Students",
    image: Infrastructuretwo,
    body:
      "State of the Art Infrastructure: The students use laptops for performing their tasks, oriented towards their project work and a well-established wired and wireless network are made available 24x7. High end communication mechanisms are used for collaborating with globally distributed teams across learning centers. We will be providing high band-width internet connectivity, 24x7 lab facility, expert faculty.",
  },
  {
    id: 5,
    idName: "Infrastructure",
    name: "Infrastructure",
    image: Infrastructure,
    body:
      "State of the art infrastructural facilities are provided to the MSIT students at each of the learning centers.The learning centers are located in universities with sprawling campuses marked by awesome buildings and spacious lawns. Every learning center has state-of-art computer laboratories which are open for 24x7 with ultra-modern workstations. All the systems are intra-networked and a high bandwidth Internet connection is given to all the students for 24x7.Library access is given to all the students in the respective learning centers.",
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
        block: "center",
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
        block: "center",
      });
    }
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval();
  }

  render() {
    return (
      <div>
        <HeaderTitle name="MSIT-Advantage" />
        {info.map((post) => {
          if (post.id % 2 == 0) {
            return (
              <Fragment key={post.id}>
                <hr />
                <RightGrid
                  id={post.idName}
                  name={post.name}
                  image={post.image}
                  //   qualification={post.qualification}
                  //   subtitle={post.subtitle}
                  body={post.body}
                  sub={post.sub}
                />
              </Fragment>
            );
          } else {
            return (
              <Fragment key={post.id}>
                <hr />
                <LeftGrid
                  id={post.idName}
                  name={post.name}
                  image={post.image}
                  //   qualification={post.qualification}
                  //   subtitle={post.subtitle}
                  body={post.body}
                  sub={post.sub}
                />
              </Fragment>
            );
          }
        })}
      </div>
    );
  }
}

export default App;
