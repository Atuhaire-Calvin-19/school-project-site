import React from 'react'
import Foot from './Foot'
import './Cocurricular.css'

function Cocurricular() {
    return (
        <div>
            <div className = "activity">
               <h3>MUSIC DANCE AND DRAMA</h3>
                    <p>The school reminds the students of their roots in through Music Dance and Drama, keeping them in touch
                    with their tribal, Ugandan, and African roots as they appreciate the various cultures we have and exhibit our 
                    diversity. The student compete in the different houses ,both and girls and boys as they are assigned different cultures different years
                    giving chance for talents to arise in th edifferent aspects of acting, singing and even directing.</p>
            </div>

            <div className="activity">
                <h3>SPORTS</h3>
                    <p>The school also involves the students in sports as the school has a wide range of sports in the school
                    in which competitions are held withing th eschool and inter-school as well. The sports include football,
                    basketball, rugby, cricket, hockey, javelin, athletic activities, chess, swimmimng, volleyball, woodball 
                    and many others.</p>
            </div>
            
            <div className="activity">
                <h3>CLUBS</h3>
                <p>The school also engages the students in a varietyof clubs that participate in competitions within and outside the school that teach the students to be free
                thinkers and think out of the box to solve different problems in the world.The competitions ranges from a 
                variety of spheres from art, to science to general knowleddge and the students represent the school very well
                as some go on to receive scholarships and different opportuinities within the different clubs.</p>
            </div>
        
            <Foot/>
        </div>
    )
}

export default Cocurricular

