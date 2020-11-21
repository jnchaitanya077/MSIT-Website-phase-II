import React from "react";
import "../css/admissions.css";
import HeaderTitle from "../components/headerImage.js";
import article1 from "../images/blog/article1.jpeg";

function App() {
  return (
	<div>
	  <HeaderTitle name="Entrance Test Syllabus" />
	  <div class="content">
		<div class="container">
			<div class="row ">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="post-holder">
						<div class="author-block">
							<div class="author-content">
								<div class="author-header p">
								<div >
									<img src={article1} className="box2"  className="center"/><br/><br/>
								</div>
									<h4 style={{ color: "#0a3dab" }}><strong>What is GAT?</strong></h4>
									<p>
										GAT is the acronym for Graduate Aptitude Test. A good score in GAT is a 
										part- requirement for admission to The Master of Science in Information 
										Technology (MSIT) Program, which is a two year post graduate program in 
										Computer Science. MSIT program is offered by “Consortium of Institutions
										of Higher Learning” (CIHL), formed by the Universities. MSIT is currently 
										offered at International Institute of Information Technology (IIIT-H),
										Hyderabad, School of IT, Jawaharlal Nehru Technological University 
										Hyderabad (JNTUH), College of Engineering, Jawaharlal Nehru Technological 
										niversity Kakinada (JNTUK) and College of Engineering, Jawaharlal Nehru 
										Technological University Anantapur (JNTUA) and Sri Venkateswara University 
										Tirupati (SVU). GAT is typically taken by Graduates in Engineering of any 
										branch (B.Tech/B.E) or final year students. GAT measures Literacy, 
										Quantitative and Writing skills that are needed for academic success in 
										higher learning. GAT assesses problem – solving skills under a strict time 
										limit. GAT is administered online and is a Computer-based Test. GAT has been
										eveloped, administered and scored by Eduquity Career Technologies (P) Ltd, a 
										Bangalore-based Human Resources Assessment Company.
									</p>
								</div>
							</div>
                            </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	  );
	  }

export default App;