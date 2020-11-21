import React, { Fragment } from "react";
import HeaderTitle from "../components/headerImage.js";
import RightGrid from "../components/gridRight.js";
import LeftGrid from "../components/gridLeft.js";
import Founder from "../images/faculty/Dean/RajReddy_optimized.jpg";
import Dean from "../images/faculty/Dean/Dean_optimized.jpg";
import AssocDean from "../images/faculty/Dean/Praveen_optimized.jpg";
import Head from "../images/faculty/Dean/Manjunath_optimized.jpg";

const info = [
  {
    id: 1,
    name: "Dr .Raj Reddy",
    image: Founder,
    subtitle: "Founder, MSIT Programme",
    qualification: "Phd.",
    body:
      "The MSIT Program aims at shaping up students to be well-rounded professionals, invoking their dormant capabilities through a constant process of individual mentoring. The course follows a unique pedagogy of learning by doing, which facilitates students to learn theory as well as the practical nuances of foundation IT courses. Students also undertake a specialization in a particular domain in their second year of study. As part of this process, the program also includes soft skills training that follows a holistic approach to teach students the life skills required to excel in corporate life.",
    link: "",
    text: "",
  },
  {
    id: 2,
    name: "Dr. M. Sreenivasa Rao",
    image: Dean,
    subtitle: "Dean, MSIT Programme",
    qualification: "Phd.",
    body:
      "There are associate mentors physically available for the students to guide them through all the courses. MSIT maintains a student:mentor ratio of less than 10:1. i.e. for every 10 students there is one mentor available. There are domain experts, who create the course content and are called Principal Mentors. Apart from this, each learning center has a Course Coordinator, who is a Computer Science Professor in the department. The students also have access to digital lectures from various renowned professors world wide. We try to pick the best lectures available in the domain and deliver it to the students.",
    link: "https://youtu.be/lEE1kJwlEd8",
    text: "Know more",
  },
  {
    id: 3,
    name: "Praveen Garimella",
    image: AssocDean,
    subtitle: "Associate Dean, MSIT Programme",
    qualification: "",
    body:
      "Students typically don’t attend lot of classroom sessions in our program. Every day, they have some video lectures that they would listen to and they have projects.Most of the student time goes into doing projects. While the students are doing projects, they need help,that’s when the concept of a mentor comes in. Mentor is almost at the age of students, he is very friendly with the students,he is supposed to be guiding them on an hourly basis, helping them whenever they are stuck with the project by giving them guidance on how to go forward. The students have to basically use that advice and keep working on the projects. The idea is, as a result of working on the projects, the students end up spending more than 80% of their time here doing hands on work. As a result of that, the repeated practice, they actually gain lot of confidence whenever projects of that kind are given to them when they get into industry. This is how the “Learn By Doing” is broadly laid out.",
    link: "https://youtu.be/oSLr6DrUpRo",
    text: "Know more",
  },
  {
    id: 4,
    name: "M. Manjunath",
    image: Head,
    subtitle: "Head, MSIT Programme",
    qualification: "",
    body:
      "MSIT is a very unique program started in 2001. Ever since 2001, we have been seeing really great success stories that helped so many engineers transform themselves into IT professionals. In MSIT, we emphasize more on hands-on, we emphasize more on how you would react to different situations in the industry. All the courses in MSIT are designed around problem-solving. MSIT also helps you with lot of peer learning and how would you cope up when a new technology is introduced to you.",
    link: "https://youtu.be/a7c0O6bAATs",
    text: "Know more",
  },
];

function App() {
  return (
    <div>
      <HeaderTitle name="MSIT-Vision" />
      {/* Founder */}
      {info.map((post) => {
        if (post.id % 2 == 0) {
          return (
            <Fragment key={post.id}>
              <hr />
              <RightGrid
                name={post.name}
                image={post.image}
                qualification={post.qualification}
                subtitle={post.subtitle}
                body={post.body}
                link={post.link}
                text={post.text}
              />
            </Fragment>
          );
        } else {
          return (
            <Fragment key={post.id}>
              <hr />
              <LeftGrid
                name={post.name}
                image={post.image}
                qualification={post.qualification}
                subtitle={post.subtitle}
                body={post.body}
                link={post.link}
                text={post.text}
              />
            </Fragment>
          );
        }
      })}
    </div>
  );
}
export default App;
