import React from "react";
import "../css/admissions.css";

import HeaderTitle from "../components/headerImage.js";

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
        <HeaderTitle name="GAT Sample Test Questions" />
        {/* Bootstrap model build */}
        <div class="newsLayout">
          {/* <div class="container"> */}
          <div class="row ">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="post-holder">
                {/* author block class to form a border around the content */}
                <div class="author-block">
                  <div class="author-content">
                    <div class="author-header p">
                      <h1 className="preview">
                        <strong>Sample Graduate Aptitude Test Questions</strong>
                      </h1>
                      <h5 class="author-title" style={{ color: "#0a3dab" }}>
                        <strong>VERBAL ABILITY</strong>
                      </h5>
                      <br />
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Sentence Completion:-</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        Given below is a sentence with blanks, indicating that a
                        part of the sentence is missing. The sentence is
                        followed by five answer choices that consist of words.
                        Select the answer choice that best completes the
                        sentence.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. The purpose of
                        the proposed indemnity policy is to __________ the
                        burden of medical costs, thereby removing what is for
                        many people &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a major
                        __________ medical care.{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. augment… problem with
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;b. eliminate…perquisite of
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. ameliorate… study of
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. assuage…impediment to
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. clarify…explanation for
                        <br />
                      </p>
                    </div>
                  </div>

                  {/* Each module starting with author content class is a division of info separating by a line. */}
                  <div class="author-content">
                    <div class="author-header p">
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Anology:-</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        Given below is a pair of words separated by a colon and
                        followed by five answer choices. Choose the pair of the
                        words in the answer choices that best expresses a
                        relationship similar to that expressed in the original
                        pair.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. EXCERPT : NOVEL
                        ::{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. CRITIQUE : PLAY
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;b. REVIEW : MANUSCRIPT
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. SWATCH : CLOTH
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. FOREWORD : PREFACE
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. RECITAL : PERFORMANCE
                        <br />
                      </p>
                    </div>
                  </div>

                  <div class="author-content">
                    <div class="author-header p">
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Reading Comprehension:-</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        Here is a passage. At the end of the passage is a series
                        of questions followed by answer choices. Read the
                        passage carefully. Select the right answer to each
                        question from the options provided. Answers are based on
                        the contents of the passage or on what the author
                        implies in the passage.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Passage for Questions 3 and 4:</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        Socialism differs from Communism in that is a tendency
                        not a body of dogmas. There is no authoritative
                        statement of its ideals upon which all are agreed and it
                        is possible for many who do not call themselves
                        sociologists to sympathize with some of their
                        principles. Whether under such conditions the theories
                        can be put to practise is a policy of advocating the
                        ownership and control of the means of production. It
                        seeks to balance a rigid discipline in what affects the
                        individual himself. It admits Mill’s distinction between
                        self – seeking and other – regarding actions, but it
                        claims that Mill’s miss – stated the problem by under
                        estimating the part played by economists. The main aim
                        of Socialism is the creation of equality, because it
                        holds that liberty is not worth having without the
                        security and equality it provides.
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.It is possible to
                        infer from the passage that capitalism may be eradicated{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a.when the exploited proletariat
                        rise in revolt <br />
                        &emsp;&emsp;&emsp;&nbsp;b.only if socialism is ushered
                        in
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c.when global Capitalism reaches
                        its saturation point
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d.when people become spiritually
                        inclined
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e.when there are no desires
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. The postulate of
                        Socialism as opposed to that of Capitalism is{" "}
                      </span>{" "}
                      <br />
                      <span className="med-font">
                        <p>
                          &emsp;&emsp;&emsp;&nbsp;a. that all men must enjoy
                          unbr/idled liberty <br />
                          &emsp;&emsp;&emsp;&nbsp;b. individual happiness and
                          social well-being must necessarily be mutually
                          exclusive
                          <br />
                          &emsp;&emsp;&emsp;&nbsp;c. surplus wealth should be
                          siphoned off in the form of increased wages for the
                          working class
                          <br />
                          &emsp;&emsp;&emsp;&nbsp;d. production of all goods
                          should serve the purpose of social utility
                          <br />
                          &emsp;&emsp;&emsp;&nbsp;e. all men should live in a
                          state of bliss
                          <br />
                        </p>
                      </span>
                    </div>
                  </div>

                  <div class="author-content">
                    <div class="author-header p">
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Antonyms:-</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        Given below is a word. Each word is followed by five
                        words or phrases. Choose the word that is most nearly
                        opposite in meaning to the word in capital letters.
                        Since some of the questions require you to distinguish
                        fine shades of meaning, be sure to consider all the
                        choices before deciding which one is best.
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.ADULATION{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. Ignorance <br />
                        &emsp;&emsp;&emsp;&nbsp;b. Unconcern
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. Dissuasion
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. Comtempt
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. Passivity
                        <br />
                      </p>
                    </div>
                  </div>

                  <div class="author-content">
                    <div class="author-header p">
                      <h5 class="author-title" style={{ color: "#0a3dab" }}>
                        <strong>Quantitative Ability:-</strong>
                      </h5>
                      <span className="med-font">
                        {" "}
                        This series consists of a set of problems. Each problem
                        is followed by a set of five options. Read the problem
                        carefully and select the most appropriate answer from
                        among the options provided.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. In an
                        examination, 70% students passed in Science and 65%
                        passed in Social Studies. 27% of the students failed in
                        both the subjects. If only 292 students passed in both
                        the subjects, the total number of students appearing for
                        the examination was{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. 400 <br />
                        &emsp;&emsp;&emsp;&nbsp;b. 70
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. 600
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. 300
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. None of These
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. In the college
                        election a candidate secured 62% of the votes and was
                        elected by a majority of 144 votes. The total number of
                        votes polled is{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. 500 <br />
                        &emsp;&emsp;&emsp;&nbsp;b. 600
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. 300
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. 200
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. None of These
                        <br />
                      </p>
                    </div>
                  </div>

                  <div class="author-content">
                    <div class="author-header p">
                      <h5 class="author-title" style={{ color: "#0a3dab" }}>
                        <strong>Quantitative Comparison:-</strong>
                      </h5>
                      <span className="med-font">
                        {" "}
                        The following set of questions comprises two columns -
                        column A and column B. Compare the two quantities
                        indicated and answer the question that follows. The
                        correct answer is one among the five options provided.{" "}
                      </span>{" "}
                      <br />
                      <span className="med-font">
                        NOTE: Sometimes information about one or both quantities
                        is centered above the two columns. If the same symbol
                        appears in both columns, it represents the same thing
                        each time.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Quantity A =
                        (9/13)2 Quantity B = (9/13)1/2{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. Quantity A is greater <br />
                        &emsp;&emsp;&emsp;&nbsp;b. Quantity B is greater
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. Quantity A equals Quantity B
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. Relationship Indeterminate
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. None of the above
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Quantity A =
                        (1/25)1/2 + (1/144)1/2 Quantity B = [(1/25) +
                        (1/144)]1/2{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. Quantity A is greater <br />
                        &emsp;&emsp;&emsp;&nbsp;b. Quantity B is greater
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. Quantity A equals Quantity B
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. Relationship Indeterminate
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. None of the above
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. y2 + z2 = 34 and
                        yz = 15{" "}
                      </span>{" "}
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity A =
                        y2 + 2yz + z2 Quantity B = (y + z)2{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. Quantity A is greater <br />
                        &emsp;&emsp;&emsp;&nbsp;b. Quantity B is greater
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. Quantity A equals Quantity B
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. Relationship Indeterminate
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. None of the above
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Two finite sets
                        have ‘m’ and ‘n’ elements respectively. The total number
                        of subsets of ‘m’ is 56 more than the total number of
                        subsets of ‘n’. The values of ‘m’ and ‘n’are
                        respectively,{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. 7,6 <br />
                        &emsp;&emsp;&emsp;&nbsp;b. 6,3
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. 5,1
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. 8,7
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. 2,5
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Let L denote the
                        set of all straight lines in a plane. Let a relation R
                        be defined by a R b Û a ^ b for a,b Î L. The relation R
                        is{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a.reflexive <br />
                        &emsp;&emsp;&emsp;&nbsp;b. symmetric
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. transitive
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. equivalence
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. none of these
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. If a function F
                        is such that F ( 0 ) = 2, F (1) = 3 and F ( x + 2 ) = 2
                        F (x) – F ( x + 1 ) for x ³ 0, then F (5) is equal to{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a.-7 <br />
                        &emsp;&emsp;&emsp;&nbsp;b. -3
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. 17
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. 13
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. none of these
                        <br />
                      </p>
                    </div>
                  </div>

                  <div class="author-content">
                    <div class="author-header p">
                      <h5 class="author-title" style={{ color: "#0a3dab" }}>
                        <strong>Analytical and Reasonaning Ability:-</strong>
                      </h5>
                      <span className="med-font">
                        {" "}
                        In this section, each set of questions is based on a
                        short passage or a set of conditions. Sometimes, in
                        answering these questions, you might want to make a
                        table or diagram. For each question, choose the best
                        answer from the five choices listed.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Passage for Questions 1 and 2:-</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        As president of the National Association of Rubber
                        Manufactures, I oppose government handouts to private
                        businesses. But the present program of aid to the Rubber
                        Industry must continue. This is not a handout but rather
                        a system of moderate cash subsidies to enable our
                        beleaguered industry to withstand the shocks of rising
                        costs and high interest rates, and so continue to
                        provide useful employment to thousands of Indian
                        citizens.{" "}
                      </span>{" "}
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. The major logical
                        weakness of the argument above is the fact that -{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. The speaker is arguing
                        against his own personal interest. <br />
                        &emsp;&emsp;&emsp;&nbsp;b. It makes no attempt to
                        explain the ultimate causes of rising costs and high
                        interest rates.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. It draws no meaningful
                        distinction between handouts and subsidies.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. It does not explain the
                        significance of the Widget Industry for the Indian
                        economy as a whole.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. It offers no factual evidence
                        to substantiate the claim that the rubber industry is in
                        danger.
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Which of the
                        following persons would be most likely to disagree with
                        the conclusions reached in the above argument?{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. The president of a
                        medium-sized Rubber Manufacturing firm. <br />
                        &emsp;&emsp;&emsp;&nbsp;b. The patentee of a new
                        material designed to make the rubber obsolete.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. The district administrator
                        charged with coordinating the Rubber Industry subsidy
                        program.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. A government representative
                        from a district containing several large rubber
                        manufacturing plants.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. The president of the National
                        Rubber Industry Employees’ Union.
                        <br />
                      </p>
                      <h6 style={{ color: "#0a3dab" }}>
                        <strong>Passage for Questions 3 to 5:-</strong>
                      </h6>
                      <span className="med-font">
                        {" "}
                        An office manager must assign offices to six staff
                        members. The available offices, numbered 1 to 6
                        consecutively, are arranged in a row, and are separated
                        only by six-foot-high dividers. Therefore, voices,
                        sounds, and cigarette smoke readily pass from each
                        office to those on either side.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        {" "}
                        Priya’s work requires her to speak on the telephone
                        frequently throughout the day.
                        <br />
                        Anand and Dev often talk to one another in their work,
                        and prefer to have adjacent offices.
                        <br />
                        Sneha, the senior employee, is entitled to Office 5,
                        which has the largest window.
                        <br />
                        Mridul needs silence in the office(s) adjacent to his
                        own.
                        <br />
                        Naveen, Anand, and Rahul all smoke. Sneha is allergic to
                        tobacco smoke and must have nonsmokers in the office(s)
                        adjacent to her own.
                        <br />
                        Unless otherwise specified, all employees maintain
                        silence while in their offices.{" "}
                      </span>{" "}
                      <br />
                      <br />
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.The best employee
                        to occupy the office furtherest from Dev would be{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. Naveen <br />
                        &emsp;&emsp;&emsp;&nbsp;b. Priya
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. Sneha
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. Rahul
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. Anand
                        <br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. The three
                        employees who smoke should be placed on Offices{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. 1,2 and 3 <br />
                        &emsp;&emsp;&emsp;&nbsp;b. 1,2 and 4<br />
                        &emsp;&emsp;&emsp;&nbsp;c. 1,2 and 6<br />
                        &emsp;&emsp;&emsp;&nbsp;d. 2,3 and 4<br />
                        &emsp;&emsp;&emsp;&nbsp;e. 2,3 and 6<br />
                      </p>
                      <span className="med-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Which of the
                        following events, occurring one month after the
                        assignment of offices, would be most likely to lead to a
                        request for a change in office assignment by one or more
                        employees?{" "}
                      </span>{" "}
                      <br />
                      <p>
                        &emsp;&emsp;&emsp;&nbsp;a. Priya deciding that she needs
                        silence in the office(s) adjacent to her own.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;b. Dev contracting laryngitis.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;c. Rahul giving up smoking.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;d. Naveen taking over the duties
                        formerly assigned to Miss br/aun.
                        <br />
                        &emsp;&emsp;&emsp;&nbsp;e. Sneha installing a noisy
                        teletype machine in her office.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
export default App;
