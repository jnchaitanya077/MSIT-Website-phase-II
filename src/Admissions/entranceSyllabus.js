import React from "react";
import "../css/admissions.css";
import HeaderTitle from "../components/headerImage.js";
import Gat from "../images/logos/gat.PNG";
import Syllabus from "../images/logos/syllabus_table.jpg";

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
        <HeaderTitle name="Entrance Test Syllabus" />
        {/* <div class="content"> */}
        <div class="newsLayout">
          <div class="row ">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="post-holder">
                <div class="author-block">
                  <div class="author-content">
                    <div class="author-header p">
                      <div>
                        <img src={Gat} className="box2" className="center" />
                        <br />
                        <br />
                      </div>
                      <h4 style={{ color: "#0a3dab" }}>
                        <strong>What is GAT?</strong>
                      </h4>
                      <p>
                        GAT is the acronym for Graduate Aptitude Test. A good
                        score in GAT is a part- requirement for admission to The
                        Master of Science in Information Technology (MSIT)
                        Program, which is a two year post graduate program in
                        Computer Science. MSIT program is offered by “Consortium
                        of Institutions of Higher Learning” (CIHL), formed by
                        the Universities. MSIT is currently offered at
                        International Institute of Information Technology
                        (IIIT-H), Hyderabad, School of IT, Jawaharlal Nehru
                        Technological University Hyderabad (JNTUH), College of
                        Engineering, Jawaharlal Nehru Technological niversity
                        Kakinada (JNTUK) and College of Engineering, Jawaharlal
                        Nehru Technological University Anantapur (JNTUA) and Sri
                        Venkateswara University Tirupati (SVU). GAT is typically
                        taken by Graduates in Engineering of any branch
                        (B.Tech/B.E) or final year students. GAT measures
                        Literacy, Quantitative and Writing skills that are
                        needed for academic success in higher learning. GAT
                        assesses problem – solving skills under a strict time
                        limit. GAT is administered online and is a
                        Computer-based Test. GAT has been eveloped, administered
                        and scored by Eduquity Career Technologies (P) Ltd, a
                        Bangalore-based Human Resources Assessment Company.
                      </p>
                    </div>
                  </div>
                  <div class="author-content">
                    <div class="author-header p">
                      <h4 style={{ color: "#0a3dab" }}>
                        <strong>STRUCTURE OF GAT</strong>
                      </h4>
                      <p>
                        GAT consists of two main sections, namely, Critical
                        Reading and, Quantitative Ability.The Critical Reading
                        section comprises of Reading Comprehension , Analytical
                        and Logical Reasoning. The Quantitative Ability section
                        comprises of Discrete Comparisons (Percentages, Ratios,
                        Profit and Loss etc.), Data Analysis (Graphs, Charts and
                        Tables), Quantitative Comparison (Diagrams, Formulae,
                        Distance, Time etc.), Sets, Relations and Functions
                        (Venn diagrams, Linear equations, Intersections, etc.).
                      </p>
                    </div>
                  </div>
                  <div class="author-content">
                    <div class="author-header p">
                      <h4 style={{ color: "#0a3dab" }}>
                        <strong>SCORING In GAT</strong>
                      </h4>
                      <p>
                        Scaled scores are a standardized converted score based
                        on your correct responses. A Scaled Score is the total
                        number of correct answers (i.e, the raw score) that has
                        been converted into a consistent and standardized scale.
                        In each GAT section, the scores are graded on a scale of
                        200-800 making a total of 1600 for both the sections.
                      </p>
                    </div>
                  </div>
                  <div class="author-content">
                    <div class="author-header p">
                      <h4 style={{ color: "#0a3dab" }}>
                        <strong>PREPARATION FOR GAT</strong>
                      </h4>
                      <p>
                        Since GAT is not directly a knowledge based test, it
                        takes into account what a student has learnt in his
                        school/high school days up to Standard XII. Therefore,
                        practice becomes more important than just reading. It is
                        advisable for candidates to practise mock tests through
                        various websites and books. A list of test web links and
                        practice books are indicated below- <br />
                        <br />
                      </p>
                      <p>
                        <strong style={{ color: "#0a3dab" }}>WEBLINKS:</strong>{" "}
                        Here students can find Aptitude Questions and Answers
                        with explanations for Quantitative Aptitude, Logical
                        Reasoning, Verbal Ability & Data Interpretation so that
                        they can learn, practise & improve their skills.
                      </p>
                      <p>
                        &emsp;&emsp;
                        <a href="http://placement.freshersworld.com/">
                          1. http://placement.freshersworld.com/
                        </a>
                        <br />
                        &emsp;&emsp;
                        <a href="http://www.practiceaptitudetests.com/">
                          2. http://www.practiceaptitudetests.com/
                        </a>
                        <br />
                        &emsp;&emsp;
                        <a href="http://www.indiabix.com/">
                          3. http://www.indiabix.com/
                        </a>
                        <br />
                        &emsp;&emsp;
                        <a href="https://www.aptitude-test.com/">
                          4. https://www.aptitude-test.com/
                        </a>
                        <br />
                        &emsp;&emsp;
                        <a href="https://gat-cs-web.firebaseapp.com/">
                          5. https://gat-cs-web.firebaseapp.com/
                        </a>{" "}
                        (Computational Problem Solving Tutorial is offered by
                        MSIT in the beside link. If the candidates have any
                        queries in the concepts which they have learnt from the
                        tutorial, they can send them to : ask@msitprogram.net.
                        Their queries would be duly answered.
                        <br />
                      </p>
                      <h5 style={{ color: "#0a3dab" }}>Reference Books</h5>
                      <p>
                        Here you can practise any number of test papers and in
                        many cases the working principles are also stated.
                        <br />
                        <ol list-type-position="inside">
                          <li>
                            Barron’s Strategies and Practice for the New
                            PSAT/NMSQT by BARRON
                          </li>
                          <li>
                            A modern approach to Verbal & Non-Verbal reasoning
                            by Dr. R.S. AGGARWAL
                          </li>
                          <li>
                            Quantitative Aptitude for Competitive Examinations
                            by R.S. AGGARWAL
                          </li>
                          <li>
                            Quantitative Aptitude for Competitive Examinations
                            by TRISHNAS
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>

                  <div class="author-content">
                    <div class="author-header p">
                      <h4 style={{ color: "#0a3dab" }}>
                        <strong>
                          MSIT GAT 2019 Instructions to candidates:
                        </strong>
                      </h4>
                      <br />
                      <h5 style={{ color: "#0a3dab" }}>Test Regulations</h5>
                      <p>
                        Take a Practice Online test{" "}
                        <a href="https://online.cbexams.com/RPS/MSIT/Practice_Instructions.aspx">
                          Mock Test
                        </a>{" "}
                        to get familiarity with rules and regulations.
                      </p>
                      <br />
                      <h5 style={{ color: "#0a3dab" }}>Timing and Breaks</h5>
                      <ol list-type-position="inside">
                        <li>
                          The test you are taking is the Online GAT and the
                          duration is 60 minutes.
                        </li>
                        <li>
                          No break is permitted between the sections of the
                          online GAT.
                        </li>
                      </ol>

                      <h5 style={{ color: "#0a3dab" }}>
                        TESTING PROCEDURE: ONLINE GAT
                      </h5>
                      <ol list-type-position="inside">
                        <li>
                          The online MSIT will consist of 50 multiple choice
                          questions to be answered in 60minutes.
                        </li>
                        <li>
                          The online test you are about to take has TWO
                          sections:
                        </li>
                        <ol list-type-position="inside">
                          <li>
                            <strong>
                              SECTION I – CRITICAL READING & WRITING
                            </strong>{" "}
                            (This section consists of 25 questions assesses your
                            ability on reading comprehension, analytical and
                            logical thinking, Verbal ability and English
                            comprehension)
                          </li>
                          <li>
                            <strong>SECTION II - QUANTITATIVE ABILITY</strong>{" "}
                            consists of 25 multiple choice questions. This
                            section assesses your Quantitative (Mathematical)
                            Ability.
                          </li>
                          <li>
                            Each question is followed by 4 or 5 options. Choose
                            the option that is most appropriate. CLICK on the
                            circle adjacent to it.
                          </li>
                          <li>All questions carry ONE mark</li>
                          <li>**There is no negative marking.**</li>
                          <li>
                            In each of these sections,every question is followed
                            by either 4 or 5 answer options. Choose the option
                            that is most appropriate. Indicate your answer by
                            clicking on the circle adjacent to the option you
                            think is right.
                          </li>
                        </ol>
                      </ol>

                      <img src={Syllabus} className="center2" />
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
