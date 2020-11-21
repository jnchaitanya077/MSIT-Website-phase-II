import React from "react";
import HeaderTitle from "../components/headerImage";
import Collapsible from "react-collapsible";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// import "../css/quickLinks.css";
import "../css/AboutMsit.css";

const ITCore = [
  {
    id: 1,
    courseName: "Digital Literacy (Prerequisite)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    courseName: "Computer Science programming and principles",
    description:
      "Most students who start the MSIT program are not from Computer Science or Information Technology branches of engineering. Independent of that, almost all the students do not have the necessary CS background knowledge when they join MSIT. So, in CSPP1 the fundamental concepts in computer science are covered along with a very popular introductory programming language called python. Upon successful completion of this course, students will be able to read and write python programs.",
  },
  {
    id: 3,
    courseName: "Introduction to Data science",
    description:
      "Learning from data in order to gain useful predictions and insights. This course introduces methods for five key facets of an investigation: data wrangling, cleaning, and sampling to get a suitable data set; data management to be able to access big data quickly and reliably; exploratory data analysis to generate hypotheses and intuition; prediction based on statistical methods such as regression and classification; and communication of results through visualization, stories, and interpretable summaries.",
  },
  {
    id: 4,
    courseName: "Object oriented programming",
    description:
      "This course will give you a foundation in Java syntax that will start your journey towards becoming a successful Java developer. Intensive and hands-on, the course emphasizes more on becoming productive quickly as a Java developer. This course quickly covers the Java language syntax and then moves into the object-oriented features of the language. Students will then learn the I/O streams and collections API packages. The goal of this course is to introduce techniques used in computer science to solve complex problems.",
  },
  {
    id: 5,
    courseName: "Algorithms and Data Structures-1",
    description:
      "The study of algorithms and data structures is fundamental to any computer- science curriculum, but it is not just for programmers and computer-science students. Everyone who uses a computer wants it to run faster or to solve larger problems. They have become essential tools in engineering; and from database systems to internet search engines, they have become essential parts of modern software systems. And these are but a few examples as the scope of computer applications continues to grow. This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations which covers elementary data structures, sorting, and searching algorithms.",
  },
  {
    id: 6,
    courseName: "Database Management Systems",
    description:
      "A database is an organized collection of data. A relational database, more restrictively, is a collection of schemas, tables, queries, reports, views, and other elements. Database designers typically organize the data to model aspects of reality in a way that supports processes requiring information, such as (for example) modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies.\n A database-management system (DBMS) is a computer-software application that interacts with end-users, other applications, and the database itself to capture and analyze data. A general-purpose DBMS allows the definition, creation, querying, update, and administration of databases.\n A database is not generally portable across different DBMSs, but different DBMSs can interoperate by using standards such as SQL and ODBC or JDBC to allow a single application to work with more than one DBMS.",
  },
  {
    id: 7,
    courseName: "Software Engineering Foundations",
    description:
      "The goal of this course is to lay a solid Software Engineering Foundation for graduate students moving into their final year of studies in the MSIT program. Programming skills are crucial, but producing workable code without industry standards is not sufficient. Professionals in the industry produce workable software products that seamlessly map design into code. A successful software professional must have many skills as well as a wealth of experience in order to predictably deliver quality products on time and within budget.",
  },
  {
    id: 8,
    courseName: "Algorithms and Data Structures-2",
    description:
      "This course is fundamental to any computer science curriculum, but it is not just for programmers and computer-science students. Everyone who uses a computer wants it to run faster or to solve larger problems. The algorithms in this course represent a body of knowledge developed over the last 50 years that has become indispensable. Pairwise connections between items play a critical role in a vast array of computational applications. The relationships implied by these connections lead immediately to a host of natural questions: Is there a way to connect one item to another by following the connections? How many other items are connected to a given item? What is the shortest chain of connections between this item and this other item? To model such situations, we use abstract mathematical objects called graphs. In this course, we examine basic properties of graphs in detail, setting the stage for us to study a variety of algorithms that are useful for answering questions of the type just posed.We communicate by exchanging strings of characters. Accordingly, numerous important and familiar applications are based on processing strings. We consider classic algorithms for addressing the underlying computational challenges surrounding applications.",
  },
  {
    id: 9,
    courseName: "Introduction to computer systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 10,
    courseName: "Computer Networks",
    description:
      "This course aims to introduce the fundamentals concepts of data communication and networking protocols, and routing technologies. Students will learn to design, install and manage networks and develop socket programming",
  },
  {
    id: 11,
    courseName: "Web programming",
    description:
      "This course aims to introduce the fundamentals concepts of data communication and networking protocols, and routing technologies. Students will learn to design, install and manage networks and develop socket programming",
  },
  {
    id: 12,
    courseName: "Cloud computing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 13,
    courseName: "Cyber Security",
    description:
      "Introduction to cyber security is a two week course offered to MSIT first year students for 2 credits. This course provides concepts behind security, along with hands on exercises to solve aspects around device level security, network host discovery, human behavioral attacks, privacy on online and social media, network security through pen testing, physical and personal security, and cryptographic primitives. Students are supposed to prepare cyber security awareness posters for their batchmates and society. Students also get to work on cryptography and public key certificates, along with tools that help them defend against most cyber attacks.",
  },
  {
    id: 14,
    courseName: "Practicum - I",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ITElectives = [
  {
    id: 1,
    courseName: "Privacy Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    courseName: "Computer Networks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const SSCourses = [
  {
    id: 1,
    courseName: "Communication Skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    courseName: "Career Management Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    courseName: "Effective Relationship Building Course",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    courseName: "Interview Facing Skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    courseName:
      "General aptitude and mental ability & continuous programming assessment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Specializations = [
  {
    id: 1,
    courseName: "Computer Networks and Information Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    courseName: "E-Business Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    courseName: "Software Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    courseName: "Data Analytics and Data Visualization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    courseName: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    courseName: "Blockchain Technologies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

class courses extends React.Component {
  componentDidUpdate() {
    console.log("mount");
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        // inline: "nearest",
      });
    }
  }

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

  render() {
    return (
      <div id="top">
        <HeaderTitle name="Courses And Structure" />
        <div className="newsLayout Courses-overview">
          <div
            className="row profile-row"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            {/* <!-- text column--> */}
            <div className="col-12">
              <p>
                MSIT employs a unique ‘Sequential Learning’ technique by which a
                student only moves on to the next course after thoroughly
                mastering the preceding course as against the conventional
                BTECH/MTECH programs which offer courses in a parallel fashion.
                This sequential pattern would enable a student to master one
                course a time, understand the relevant concepts, give him some
                scope to explore in depth into core concepts and move on with
                the next course. The Mastery Model of assessment requires a
                student to score 70% and above. This motivates students to
                stretch their abilities and reach the required target
                percentage. An academic year is divided into 6 mini semesters.
                Duration of each mini semester is eight weeks. The first year
                has five IT and Soft Skills mini semesters each and 1 practicum
                mini semester. The Second year has four IT and Soft Skills mini
                semesters each and 2 practicum mini semesters. There would be a
                4 - week vacation spread over the year.
              </p>
              <h2>MSIT offers spectrum of courses including: </h2>

              <div
                className="shadows-courses"
                id = "ITCore"
                style={{
                  height: "auto",
                  paddingTop: "10px",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link to="/CoursesAndStructure/#ITCore" className="links">
                      <h3 className="title-text">IT Core</h3>
                    </Link>
                  </div>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link
                      to="/CoursesAndStructure/#ITElectives"
                      className="links"
                    >
                      <h3 className="title-text">IT Electives</h3>
                    </Link>
                  </div>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link
                      to="/CoursesAndStructure/#SSCourses"
                      className="links"
                    >
                      <h3 className="title-text">SS Courses</h3>
                    </Link>
                  </div>
                  <div
                    className="col-md-6 col-lg links-alignment"
                    style={{
                      marginTop: "1%",
                      marginBottom: "1%",
                      paddingTop: "0%",
                      paddingBottom: "3px",
                    }}
                  >
                    <Link
                      to="/CoursesAndStructure/#specializations"
                      className="links"
                    >
                      <h3 className="title-text">Specializations</h3>
                    </Link>
                  </div>
                </div>
              </div>
      
              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  style={{ color: "rgb(119, 11, 11)" }}
                >
                  IT Core
                </h2>
                {ITCore.map((info) => {
                  return (
                    <ul
                      className="list-items"
                      style={{ listStylePosition: "initial" }}
                    >
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                        
                      </li>
                      <div id = "ITElectives"></div>
                    </ul>
                    
                  );
                })}
              </div>
              
              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  style={{ color: "rgb(119, 11, 11)" }}
                  id = "SSCourses"
                >
                  IT Electives
                </h2>

                {ITElectives.map((info) => {
                  return (
                    <ul style={{ listStylePosition: "initial" }}>
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  style={{ color: "rgb(119, 11, 11)" }}
                  id="specializations"
                >
                  Soft Skills
                </h2>
                {SSCourses.map((info) => {
                  return (
                    <ul style={{ listStylePosition: "initial" }}>
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                    </ul>
                  );
                })}
              </div>

              <div
                className="shadows-courses p-5"
                style={{
                  height: "auto",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <h2
                  className="title-text"
                  id=""
                  style={{ color: "rgb(119, 11, 11)" }}
                >
                  Domain Specializations
                </h2>
                {Specializations.map((info) => {
                  return (
                    <ul style={{ listStylePosition: "initial" }}>
                      <li style={{ margin: "8px" }}>
                        <Jumbotron
                          fluid
                          style={{
                            height: "auto",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          <Collapsible trigger={info.courseName}>
                            <h5>Course Description</h5>
                            <p>{info.description}</p>
                          </Collapsible>
                        </Jumbotron>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default courses;
