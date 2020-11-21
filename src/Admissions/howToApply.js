import React from "react";
import HeaderImage from "../components/headerImage.js";

function App() {
  return (
    <div>
      <HeaderImage name="Apply" />
      <div className="card-body border mt-5 mb-5 pr-2 bg-light ">
        <p>
          Admissions are based on ranks obtained in the entrance exam called
          Graduate Aptitude Test (GAT). Graduate Aptitude Test (GAT) will be
          conducted by CIHL in two ways:
        </p>

        <h2 className="title mt-0">Walk-in Entrance test:</h2>
        <p>Candidates have the option to choose the date of the exam</p>

        <h2 className="title mt-0">Regular GAT Entrance test:</h2>
        <p>Exam is conducted on a fixed date.</p>

        <p>
          Due to the COVID-19 situation the Graduate Aptitude Test (GAT), both
          Walk- in Entrance and Regular GAT Entrance are conducted online i.e.
          candidates can take the test from home. Hence candidates can stay home
          and stay safe.
        </p>
        <p>
          After applying online, pay Rs.1000/- by using Credit / Debit card or
          net banking from our website ( www.msitprogram.net ). The fee paid is
          not refundable.
        </p>
        <hr />
        <p>
          The Dean,
          <br />
          Consortium of Institutions of Higher Learning,
          <br />
          IIIT Campus, Gachibowli,
          <br />
          Hyderabad - 500 032 (T.S.)
          <br />
          Phones: 040-23001970, 7799834583, 7799834585
          <br />
        </p>
      </div>
    </div>
  );
}

export default App;
