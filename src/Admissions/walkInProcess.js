import React from "react";
import HeaderImage from "../components/headerImage.js";

function App() {
  return (
    <div>
      <HeaderImage name="Walk-in Process" />
      <div class="card-body border mt-5 mb-5 pr-2 bg-light ">
        <div>
          <p>
            From 2006 admissions onwards, MSIT has introduced the "Walk-in
            Entrance" (now from home itself). This is planned for the
            convenience of the students where the students have an opportunity
            to take the MSIT entrance exam, whenever he/she is confident of
            taking the exam.
          </p>
          <hr />
          <h2 className="title">
            Walk-in Entrance Test (now online and from home itself):
          </h2>
          <p>
            Candidates have the option to choose the date of the exam. Walk-in
            entrance test can be taken on your convenient date and time between
            May 15<sup>th</sup> to June 26<sup>th</sup>. But only once. A slot
            from 10 AM to 11AM OR 2.00PM to 3 PM on any day between May 15
            <sup>th</sup> to June 26<sup>th</sup> can be opted. A non-
            refundable amount of Rs.1000 has to be paid through online by Credit
            / Debit card or net banking from our website(www.msitprogram.net).
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
