import React from "react";
import "../css/blog.css";

function App(props) {
  return (
    <div className="row main-body-adv author-block" id={props.id}>
      <div className="row Head-img center " >
        <img src={props.image} className="box  img-fluid blog-post img" />
      </div>

      <div className="left-spacing title1 headBody">
        <h2>
          <strong className="title2">
            {props.name} <span>{props.qualification}</span>
          </strong>
        </h2>
        <blockquote className="sub-para general-text">
          <q>{props.bodyPara1}</q><br/><br/>
          <q>{props.bodyPara2}</q><br/><br/>
             <img src={props.image2} className=" Head-img img-fluid center2 img-size" />
            <h3>{props.sub_head1}</h3>
          <q>{props.bodyPara3}</q><br/><br/>
          <h3>{props.sub_head2}</h3>

          <q>{props.bodyPara4}</q><br/><br/>
          <img src={props.image4} className=" Head-img img-fluid center2 img-size" /><br/>

          <h3>{props.sub_head3}</h3>
          <q>{props.bodyPara5}</q><br/><br/>

          <h3>{props.sub_head4}</h3>
          <q>{props.bodyPara6}</q><br/><br/>
          <img src={props.image5} className=" Head-img img-fluid center2 img-size" /><br/>

          <h3>{props.sub_head5}</h3>
          <q>{props.bodyPara7}</q><br/><br/>
          <h3>{props.sub_head6}</h3>
          <q>{props.bodyPara8}</q><br/><br/>
          <img src={props.image7} className=" Head-img img-fluid center2 img-size" />

          <h3>{props.sub_head7}</h3>
          <q>{props.bodyPara9}</q><br/><br/>
          <img src={props.image6} className=" Head-img img-fluid center2 img-size" />

          <q>{props.bodyPara10}</q><br/><br/>
          
          <img src={props.image3} className=" Head-img img-fluid center2 img-size" /><br/>



        </blockquote>
        
        
      </div>
    </div>
  );
}

export default App;
