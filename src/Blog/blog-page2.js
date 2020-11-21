import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage.js";
import Blog_Component from "../components/blog_page_comp.js";
import article22 from "../images/blog/article22.png";
import article23 from "../images/blog/article23.png";
import article24 from "../images/blog/article24.png";
import article25 from "../images/blog/article25.png";
import article26 from "../images/blog/article26.png";
import article27 from "../images/blog/article27.png";
import article28 from "../images/blog/article28.png";



function App() {
  return (
    <div>
      <HeaderTitle name="Values From A Virus" />
      <Blog_Component
        id="Blog_Page1"
        image={article22}
        name="By: IIITH Blog"
        
        bodyPara1="It may have been a drop in the ocean but the International Institute of Information Technology Hyderabad’s small contribution towards the migrant crisis during the pandemic has lessons for all. Here’s a look at the initiative from the student volunteer perspective. "

        bodyPara2="As an institute of higher education, the International Institute of Information Technology prides itself not only on imparting high quality technical education to students but also creating well-rounded personalities who will be better equipped to face life. One of the ways in which ‘training’ for the latter is given is through a compulsory course for undergraduates – the Human Values course. Very briefly, the course aims to enable students to make a distinction between the valuable and the superficial in real situations in their lives. During the recent nation-wide lockdown enforced due to the Covid-19 pandemic, the enthusiasm with which students and faculty members with the help of their families, administrative staff and mess workers voluntarily took up an initiative of providing cooked meals to the homeless, daily wage earners and migrant labourers, is testimony to the success of the Human Values experiment."
        image2={article23}

        sub_head1 = "Stranded Migrants"
        bodyPara3="While the privileged few took the forced isolation as an opportunity to pause, reflect, and spend time with family, for the informal workforce (about 90-92% of total Indian workforce) it spelled doom. According to media reports, a conservative estimate of migrants in this informal workforce would be more than 100 million. Over the past few decades, employing labour in the manufacturing sector through the subcontracting system – contract labour – too has increased manifold. With a shutting down of factories and worksites, it meant a shutdown to the only source of income for them. “During the lockdown, there were no words to express our feelings and emotions to imagine these huge numbers without a home, or income and with starving children. Since it was just not possible for us to sit back and do nothing, as a IIITH community, we took the initiative of preparing and packing cooked food for the needy,” says one of the students who is currently on campus."
        
        sub_head2 = "Challenges"
        bodyPara4="Once the decision of providing 150 meal boxes twice a day (for lunch and dinner requirements of the migrants) was taken, the next step was to manoeuvre through some logistical hurdles. Providing packed food boxes essentially needs a well equipped kitchen, dedicated set of volunteers and most importantly enough capital to start with. The cost of each boxed meal was calculated to be ₹25. Hence, 300 meals a day would cost approximately 2.25 lakhs per month. The monetary challenge was immediately sorted thanks to the generous contributions from students (current and alumni), staff and faculty. The mess kitchens were by then already running with reduced manpower, catering four meals to the students residing on campus. It meant that they could not single-handedly take on any additional responsibility. This is when around 80 enthusiastic volunteers stepped in. They included little children, teens, pre-teens, and spouses of administrative staffers and faculty."
        
        image4={article24}

        bodyPara5="One of the basic tenets of cooking is meal prepping which includes peeling, chopping, slicing, roasting and so on of ingredients. With this voluntary brigade pitching in to meal prep, it significantly eased the burden of cooking for the mess staff. It was the volunteers again who dealt with the packaging of the cooked food too – sealing them in disposable aluminium-foil containers. The idea was to provide nutritious, one-pot meals that would not only be simpler to cook but also convenient to pack and eat. Hence the menu was replete with nourishing fare such as rajma-chawal, chole-chawal, black chana-chawal, matar-chawal, three different kinds of khichdi, daliya upma, jeera rice with chana dal and so on. On a number of occasions, complex dishes too were experimented with and served such as puri-sabji, bagara rice with egg curry, pudina rice and aloo baingan, and tomato rice with aloo fry. While the Covid Relief Community Kitchen handled the cooking and packaging part of the initiative, the distribution of these cooked meals was organized by an NGO, T-SIG in association with the Government of Telangana."
                
        
        sub_head4 ="Volunteer Army"
        bodyPara6="When the institute formally shut in response to the government’s orders, all undergraduate students were asked to go home. Post graduate and research scholars were given the option of staying back to further their research pursuits. For Shwetha who was still in the process of planning her return home, the sudden country-wide lockdown that was enforced quashed all her plans. But in hindsight, it brought about some novel experiences and enabled her to forge lasting bonds with faculty and their family. “IIIT Hyderabad is a home away from home for me.Being a part of this community kitchen initiative is one of the best things that I have done in my life. It would not have been possible it if I had not been on campus,” she says. From ordering vegetables for a week, to weighing them and keeping them ready for the cutting slot, to actually cutting, cleaning the room, checking the number of aluminium containers to packing the food, the volunteers covered a gamut of activities. “We also learnt to manage things with limited resources,” adds Shweta."
        image5={article25}

        bodyPara7="Drawing a parallel with the ‘Freeze’ game children play, Murtuza Bohara, an MS by Research final year student says, “In the initial days post-announcement of the lockdown, everything was suddenly put on hold.” Being moved by the plight of the homeless and the starving, he discovered the opportunity to do something when there was an institute-wide call for volunteers. Starting off hesitantly with the chopping of vegetables, he eventually became a part of the core team, deftly managing several aspects, and even pitching in at times with the packaging when there was a sudden shortage of helping hands. He says,”Not only did I sustain my enthusiasm throughout the month of Ramzan but I also picked up some neat knife skills."
        
         bodyPara8="An individual can help one or two people, whereas the collective efforts of a group can reach out to help thousands of people. These are the reflections of Krishna Gurugubelli who says, “I got a chance to observe this at work in the community kitchen.” Labelling the entire experience as a ‘journey’, he says that it introduced him to the vibrant IIITH community that includes faculty, staff, students, friends and mess workers. Some things from the initiative that will last forever with him are picking up much-needed knife skills from Murtaza while dicing, mincing and chopping onions."
         image3={article27}
         image7={article28}
        bodyPara9="Rashmi Kalishetty is no stranger to volunteering, having stepped up to assist at countless events over the years. However she says this was “a completely different experience working with Aniket sir and Radhika ma’am”, who she calls the ‘pillars’ of the enterprise. Recollecting the positive feedback they received after the first attempt when they packed rajma-chawal, she says,”It gave so much happiness!”. When the community kitchen had to be temporarily suspended because some of the mess workers chose to return to their hometowns through the special trains arranged by Indian Railways, the volunteers thought it was curtains on the initiative. “I felt so restless. But when we resumed it after exactly 10 days, I felt as if I got my lungs back!”, she exclaims with a laugh."
        image6={article26}

        bodyPara10="Pradeep Kumar Pal claims his excitement and enthusiasm levels are at an all-time high not in the least because he is a first year doctorate student. Time management however proved to be a bit of a challenge for him because he had to juggle not only course work but also research work during the shutdown. “I’m also involved actively in other chores like taking care and feeding the huge pack of 24 campus dogs every night,” he says. But that didn’t stop him from joining forces with the Community Kitchen team. Calling it one of life’s lessons and an exercise in character building, Pradeep says that it helped them in getting to know others who have so far either been faceless personas or nameless faces such as Debanjan Ghosal, the person in charge of Kadamba mess. “Mr. Ghosal worked really hard, rising to the challenge with less than 1/3rd of his staff and handled it in the best possible way.”"
      />
    </div>
  );
}
export default App;
