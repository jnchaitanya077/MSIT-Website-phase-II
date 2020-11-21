import React from "react";
import "../css/staff.css";
import HeaderTitle from "../components/headerImage.js";
import Blog_Component from "../components/blog_page_comp.js";
import wiki2 from "../images/blog/wiki2.png";
import wiki3 from "../images/blog/wiki3.png";
import wiki4 from "../images/blog/wiki4.png";
import wiki5 from "../images/blog/wiki5.png";
import wiki6 from "../images/blog/wiki6.png";
import wiki7 from "../images/blog/wiki7.png";
import wiki8 from "../images/blog/wiki8.PNG";






function App() {
  return (
    <div>
      <HeaderTitle name="Telugu Wikipedia: Rally For Knowledge Rivers" />
      <Blog_Component
        id="Blog_Page1"
        image={wiki2}
        name="By: Saritha Chebbi"
        qualification=""
        image2={wiki3}
        image3={wiki4}
        image4={wiki5}
        image5={wiki6}
        image6={wiki7}
        image7={wiki8}
        sub_head1 = "Knowledge Banks"
        sub_head2 = "Taking A Leaf Out Of Other Wikis"
        sub_head3 = "Focus Groups"
        sub_head4 ="Collaborative Efforts"
        sub_head5 ="Tech: The Enabler"
        sub_head6="Working With Wiki"
        sub_head7="The Next Orbit"
        bodyPara1="Since January 2020, every weekend a motley crowd makes its way to the Nilgiri building at IIIT-H in search of the T3 lab. They are students, homemakers, retired professionals, journalists and school teachers. There’s even a scientist from BARC and a retired superintendent of Police in the mix. These men and women hailing from various parts of Hyderabad and Secunderabad are unified in the pursuit of contributing content to Wikipedia – in Telugu. Read on to know how IIIT-H is facilitating this movement."

        bodyPara2="The Wikipedia was envisioned as a free access to a digital encyclopaedia. What originally began as a side project in 2001 to allow collaboration of articles online before entering the peer-review process is today the single-most popular point of reference on the Internet. Interestingly, India is second only to the US in page views per day, but these English language Wikipedia views are only 50% more than Australia that has about 2% of India’s population. Prof. Raj Reddy, Turing award winner, the founding director of the Robotics Institute at Carnegie Mellon University and also the chairman of IIIT Hyderabad Governing Council, who has always believed in making technology and latest scientific developments accessible to the common man, says, “95% of the people in India who can read either only Hindi or some other Indian language are not able to benefit from this amazing tool for accessing knowledge and learning. Thus by expecting India’s population to rely on English Wikipedia, we are abandoning about 95% of the population who would greatly benefit from having access to this comprehensive fount of knowledge."
        
        
        bodyPara3="Inspired by Prof. Raj Reddy’s vision, the International Institute of Information Technology, Hyderabad has embarked on an ambitious mission to develop and enhance resources for Indian language Wikipedia. Prof. Vasudeva Varma, who is currently spearheading the project along with Prof. Radhika Mamidi, quotes statistics to compare content on English Wikipedia with other vernacular languages: “English has 6 or 7 million articles, Hindi has only 1.3 lakh articles and Telugu about 70,000. When compared to English resources, Telugu has about 0.25-1.25% of what English Wikipedia has online”. Using the analogy of ancient civilizations that flourished along the banks of rivers, he says, ”For societies and cultures to flourish In the modern world, it has to be along the ‘rivers’ of knowledge. And Wikipedia is one such river that society banks upon. Rallying for knowledge rivers is the motivation for this project."
        
        bodyPara4="As a first step, the team researched into ways the Wiki community developed in the past for various other languages, including Tamil, Arabic and Swedish. “We looked at both success stories as well as those of failure. And we found that in the past, those who tried to impose articles into Wikipedia without community acceptance failed,” says Prof. Varma. The reference is to the Tamil Wiki project which stands out as a case study where the stakeholders brought in technology such as machine translation tools that were not yet ready to translate content. This  resulted in unintelligible articles with a plethora of errors that upset the Wiki community. Praveen Garimella, faculty of the MSIT program at IIIT, and active member of the project, says that the Tamil Wikipedians were working really hard to create content and did not take kindly to the amount of rework that technology had laid out for them. This had natural repercussions on the Telugu Wiki community too who were initially loathe to admit technology into the fray. Hence, the Indic Wiki project kicked off by IIIT-H seeks to first actively engage with people, spread awareness of the need to create Indian language Wikipedia content, and create a robust community that will carry this forward."
        
        bodyPara5="The group has 3 sub-focus areas –  research and the development of technology, the development of community and content along with appropriate training to handle the uptake in article generation. In order to reach out to a wider and interested audience, the team joined hands with the existing Telugu blogger-Wikipedian community. From promoting writing of articles in Telugu to making them available online, this Telugu Wiki community has been actively organizing training meets, workshops and competitions for Telugu enthusiasts for well over a decade. “From 2007 to 2013, under the aegis of a society titled ‘e-Telugu’, we used to pool in money and use our own funds to evangelise about writing in Telugu. It was only in 2013 that the Centre for Internet Society stepped in as a sponsor coinciding with the 10th anniversary celebrations of Telugu Wikipedia,” says Kasyap, an old timer in the Telugu Wiki community. Incidentally, he now conducts the weekend training workshops at IIIT-H."
        
        bodyPara6="When the Community Development group of the Indic Wikipedia project identified the possibility of reaching out to a wider public by setting up a stall at the 33rd Hyderabad National Book Fair, they found a willing partner in the State Government. Sensing a splendid opportunity to increase content on Telangana heritage and culture on Wikipedia, the government has since joined hands with the Indic Wiki team to provide resources from various departments that can be used by article contributors. In the case of Hindi, the Department of Science and Technology, Govt. of India has evinced an interest in having Hindi Wikipedia enriched with articles on Science and Technology. A collaborative effort led by IIT Kanpur along with institutes such as IIIT-H and CDAC Noida has been mooted. Vibha, the project manager of Indic Wiki says, ”The plan is to have each institute handle specific topics. For instance, IIIT-H is looking at uptaking articles on biological sciences. While currently training sessions are being held in Telugu, separate sessions for writing in Hindi will kick off shortly."
        bodyPara7="The overall strategy of the team is to enhance productivity of the contributors with the help of technology. Therefore, while a part of the approach is to organically create and edit articles via the community, the second approach is to use machine translation to translate existing English articles into Telugu. Praveen quickly clarifies that this means having humans intervene in the process in addition to an automated tool. “Basically, here we pass an English article through the machine translation tool and have a human correct the errors thrown up by the machine”. The third is the AI approach where there’s a bot generating articles and automatically uploading them. This happens when knowledge available online is extracted and written in natural language. “Generation of an article with the backing of a good knowledge graph may produce a better outcome than mere translation,” says Praveen."
        
        bodyPara8="Wikipedia writing differs from the style of writing other content for different mediums. One of the most important characteristics is the neutral tone that one must adopt while writing an article here. There is no scope for opinions or personal experiences here. In addition to this, all content must be backed up by relevant and authoritative sources. It is to familiarize willing contributors in these aspects that regular workshops are being conducted at IIIT-H every weekend. Alongside creating a vibrant community, the team also equips them with productivity enhancing tools that will help in creating content. “A huge difference here is that we let the people choose what kind of tools they want to invoke rather than dictate it to them,” says Prof. Varma."
        bodyPara9="With ambitious targets of taking Indian language content to at least 50% of the English content, that is 50 million articles in the next 5-10 years, the team is currently working at a frenzied pace. Interested community folks with limited to zero access to a desktop or laptop are taught to access the Wikipedia via a mobile app. “The same web browser is available on a mobile phone,” says Vibha. Emphasizing that a project of this gargantuan nature cannot be undertaken alone, she exhorts students to get involved in the ecosystem – as writers, editors, reference providers and so on, in any language of their choice – Hindi or Telugu. Agrees Praveen, “The beauty of Wikipedia articles is that they are not created by one person but multiple people contributing. In that sense, it’s not so much authoring an article but editing it."
        bodyPara10="As yet another weekend Wiki workshop winds up, Dr. Aruna Jyothi, scientist at BARC expresses satisfaction at having picked up some content creation skills. As someone who feels she can express herself better in her mother tongue Telugu and admittedly writes faster in it too, she hopes to contribute to scientific articles in Telugu Wikipedia very soon. This is the stuff that Indic Wiki dreams are made of."
      />
    </div>
  );
}
export default App;
