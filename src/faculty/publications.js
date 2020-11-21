import React from "react";
import HeaderTitle from "../components/headerImage";
import "../css/staff.css";

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
        <HeaderTitle name="Publications" />
        <div className="main-body pt-3">
          <h5 className="year">2012</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                Manjunath Mattam: Protocol for secure submissions into Learning
                Management Systems at International Conference on Security in
                Computer Networks and Distributed Systems (SNDS 2012).
              </li>
              <li>
                Padmaja Naraharisetty, Sita Vanka :Effectiveness of Computer
                based Management Simulations- A case study, in IEEE Conference;
                Technology for Education 2012 (fourth T4E) conference.
              </li>
              <li>
                Manjunath Mattam, Sri Rama Murthy Karumuri, Srinivasa Rao Meda:
                Architecture for Automated Student Attendance, in IEEE
                Conference; Technology for Education 2012 (fourth T4E)
                conference.
              </li>
              <li>
                Praveen Garimella, R Satyanarayana, B Krishna: Understanding
                Student Behavior in Computer Based Instruction using Activity
                Monitoring Data, IIIT R & D Showcase 2012.
              </li>
              <li>
                Praveen Garimella, Vamsi Garimella, Manjunath Mattam: Learning
                By Doing - 10 years of Evaluation, IIIT R & D Showcase 2012.
              </li>
              <li>
                Praveen Garimella, Dr. Arun Kumar Parayatham: Computer Based
                Mastery Learning Instruction in Schools, IIIT R & D Showcase
                2012.
              </li>
              <li>
                Padmaja Naraharisetty: Bridging Skill Gaps: Soft Skills training
                at MSIT, IIIT R & D Showcase 2012.
              </li>
            </ul>
          </div>
          <h5 className="year">2011</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                {" "}
                Padmaja Naraharisetty, Murthy S.: Investigating the
                effectiveness of non-interactive video based lectures in
                e-learning, Technology for Education, IIT Chennai 2011.
              </li>
            </ul>
          </div>
          <h5 className="year">2010</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                V.Anandaswarup, R.R.Patil, C.M.S.Raju, E.V.Raghavendra,
                V.Ambati, and K.Prahallad: Rapid development of speech to speech
                systems for tourism and emergency services in Indian languages,
                1st International Conference on Services in Emerging Markets,
                Hyderabad, India, 2010.
              </li>
              <li>
                B.Mahananda, C.M.S.Raju, R.R.Patil, J.Narayana, S.Varakhedi, and
                K.Prahallad: Building a prototype text to speech for Sanskrit,
                4th International Sanskrit Computational Linguistics Symposium,
                New Delhi, India, 2010.
              </li>
              <li>
                Karthika Mohan, K.J.Jinesh and C.V.Jawahar: Towards Recognition
                of Degraded words by Probabilistic Parsing, ICVGIP 2010.
              </li>
              <li>
                Karthika Mohan and C.V.Jawahar: Post-Processing Scheme for
                Malayalam using Statistical Sub-character Language Models
                Proceedings of Ninth IAPR International Workshop on Document
                Analysis Systems (DAS'10), pp.493-500, 9-11 June, 2010, Boston,
                MA, USA.
              </li>
            </ul>
          </div>
          <h5 className="year">2009</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                Padmaja Naraharisetty: Just-in-Time Learning: An Effective &
                Efficient Pedagogy of Future, IASTED WBE 2009, Thailand.
              </li>
              <li>
                N Ravikanth: A scheme for contention window adjustment, R&D
                Showcase - 2009 IIIT-Hyderabad.
              </li>
              <li>
                Jayapaul K: An approach to Tune the Backoff Algorithm of IEEE
                802.11 at Run Time, R&D Showcase - 2009 IIIT-Hyderabad.
              </li>
              <li>
                Ch.Swathi: Enhanced RTS/CTS Scheme for IEEE 802.11 Wireless
                Networks based on Retransmissions, R&D Showcase - 2009
                IIIT-Hyderabad.
              </li>
              <li>
                Srinivas Kraleti: Dynamic and Differentiated Retry Mechanism for
                IEEE 802.11 Standard, R&D Showcase - 2009 IIIT-Hyderabad.
              </li>
              <li>
                Nagi Reddy: Differentiated Contention Window Scheme for IEEE
                802.11 Wireless Networks, R&D Showcase - 2009 IIIT-Hyderabad.
              </li>
            </ul>
          </div>
          <h5 className="year">2008</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                Padmaja Naraharisetty: The Road to 21st Century Learning:
                Bridging Employability Skill Gaps: Opportunities and Challenges,
                National soft skills conference, 2008, NIT Warangal.
              </li>
              <li>
                Padmaja Naraharisetty: Enhancing Experiential Learning Through
                e-Pedagogy, TARC International Conference, Malaysia 2008.
              </li>
              <li>
                Padmaja Naraharisetty: War For Talent: Re-aligning Academic
                Pursuits with Business Demands, FECS-08, USA, Nevada 2008.
              </li>
            </ul>
          </div>
          <h5 className="year">2007</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                Padmaja Naraharisetty: Best practices of HR have been hijacked
                by industries, ISTD Journal, New Delhi.
              </li>
              <li>
                Lakshmi Pratha Hari: Building a design for Secure Systems using
                Predictable Design Method, CMU CyLAB, Japan 2007.
              </li>
              <li>
                Vamshi Ambati and Rohini U: A Hybrid Approach to Example based
                Machine Translation for Indian Languages. 5th International
                Conference on Natural Language Processing (ICON 2007).
              </li>
              <li>
                Rohini U and Vamshi Ambati: Extracting Keyphrases from books
                using language modeling approaches, 3rd ICUDL, November 2007,
                Pittsburgh, USA.
              </li>
              <li>
                Vamshi Ambati, N.Balakrishnan, Raj Reddy, Lakshmi Pratha, C V
                Jawahar: The Digital Library of India Project: Process, Policies
                and Architecture, 2nd ICDL , New Delhi 2007.
              </li>
            </ul>
          </div>
          <h5 className="year">2006</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                Lavanya Prahallad, Indira Thammishetty, E.Veera Raghavendra and
                Vamshi Ambati: A tool for Entering Structural Metadata in
                Digital Libraries, International Conference on Universal Digital
                Libraries(ICUDL), Egypt 2006.
              </li>
              <li>
                Lavanya Prahallad, Vamsi Garimella and Praveen Garimella:
                Learning from Example and By Doing Approach to Train Data Entry
                Operators at Universal Digital Library.
              </li>
              <li>
                Lakshmi Pratha, Manjunath Mattam, Vamshi Ambati, Raj Reddy:
                Multimedia Digital Library: Performance and Scalability Issues.
              </li>
            </ul>
          </div>
          <h5 className="year">2005</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                Lakshmi Pratha Hari: Rapid Integration Tools for Rapid
                Application Development-A Case Study on Legacy Integration,
                International Conference of Universal Digital Library 2005.
              </li>
              <li>
                Vamshi Ambati, Pramod Sankar, Lakshmi Pratha, C.V Jawaha:
                Quality Management in Digital Libraries, International
                Conference of Universal Digital Library 2005.
              </li>
              <li>
                Vasudeva Varma, Kirti Garg, and STP Vamsi: A Case Study
                Initiative for Software Engineering Education, The 2005
                International Conference on Software Engineering Research and
                Practice (SERP'05) June 27-30, 2005, Las Vegas, USA.
              </li>
              <li>
                Kirti Garg and STP Vamsi: Managing Growth in a High Technology
                Venture , The Fact-Tree Way, Society for Entrepreneurship
                Educators, ISB, 14-15 April 2005.
              </li>
              <li>
                Bhudeb Chakravarti, Vamsi STP: Mobile Trading System - A Case
                Study in Software Design, Satyam Technology Review, Volume 3,
                Q2, April 2005.
              </li>
            </ul>
          </div>
          <h5 className="year">2003</h5>
          <div className="pub-text general-text">
            <ul>
              <li>
                {" "}
                Narasimha Murthy D,R.V Prasanna Kumar : Software Architectural
                Design Model for e-Governance System (SADM-EGS), TENCON 2003.
                Conference on Convergent Technologies for Asia-Pacific Region.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
