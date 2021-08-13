import React,{useState} from 'react';
import "./About.css"
import Foot from './Foot' 
 
function About() {
    return (
        <div className="content">
            <div className = "imageslide">
              <img src ="https://observer.ug/images2/education/secondary-schools/Kings-College-Budo-gate.jpg"></img>   
            </div> 
 
            <div className="aboutschool">
              <h2>ABOUT THE SCHOOL</h2>
              <h4>The school is located on Naggalabi Hill, in southern Wakiso District, off the Kampala-Masaka Road. 
              This location lies approximately 14 kilometres (8.7 mi), by road, southwest of Kampala.
              The school was officially opened on 29 March 1906 with 21 boys. It was founded by the Church Missionary Society. 
              It is one of the oldest schools in Uganda. The land on which it was built on was donated by the Kabaka of Buganda. 
              The school was originally started a boys only school for the sons of chiefs and kings. 
              In 1934 girls were also admitted making it a mixed-sex education school.
              
              The school is known for its high performance in the academic sector, producing the cream de la cream in the country with great consistency.
              The school also is well staffed with over 200 teaching and non-teaching staff who all work tirelessly to maintain the perfection of the school for the students. 

              The school also provides accommodation for the students with 7 houses/dormitories for the boys and 2 for the girls with both
              maintained to standards favourableand suitable for the comfortable stay of your child.
              </h4>
              
              
            </div>

            <div className="motto-vision">
              <div className= "box">
                <img src={"https://pbs.twimg.com/media/DjV7IcTXsAYcqo0.jpg"}/>
                <h2>THE MOTTO</h2>
                <p>"Gaykali Mabaga"</p>
                <p><i>translating to, it is only the beginning.</i></p>
              </div>

              <div className="box">
                <img src={"https://pbs.twimg.com/media/DjV7IcTXsAYcqo0.jpg"}/>
                <h2>THE VISION</h2>
                <p> To be the hub of globally elightened and dignified men and women,rooted in christian values. </p>
              </div> 

              <div className="box">
              <img src={"https://pbs.twimg.com/media/DjV7IcTXsAYcqo0.jpg"}/>
              <h2>CORE VALUES</h2>
              <p>Fear of God</p> 
              <p>Academic excellence</p>
              <p>Bravery for the truth</p>
              <p>Integrity</p>
              <p>Respect for self,others and property.</p>

              </div>


            </div>    
        
        <Foot/>
        </div>
    )
}

export default About
