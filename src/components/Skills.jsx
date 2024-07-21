import coding from "../assets/coding.gif";
import { skills } from "../data";
import {useEffect} from "react";
import { card } from "../data";
function Skill({theme}){
    useEffect(() => {    
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5
        });    
        const targets = document.querySelectorAll('.persent');
        targets.forEach(target => observer.observe(target));
        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    return(
        <section id="skills">
            <div className="head">
                <span>Skills</span>
                <h3>Skills</h3>            
            </div>
            <div className="skills">
                <ul>
                    {skills.map((data)=>(
                        <li key={data.id} className="skill">
                            <div className="skill-head">
                                <span>{data.name}</span>
                                <h2>{data.skill}</h2>
                            </div>                                                    
                            <div className="full-persent">
                            </div>
                            <div style={{width:data.skill+"%"}} className="persent">
                            </div>
                        </li>    
                    ))}                                                
                </ul>                
                <img src={coding}/>
            </div>
            <div className="cards">                
                {card.map((item)=>(
                    <div className="card" key={item.id}>
                    <div className="inner" >
                        <div className="front">
                            <img src={!theme?item.img:item.imgDark}/>
                            <h2>{item.name}</h2>
                        </div>
                        <div className="back">                        
                            <h2>{item.text}</h2>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </section>

    )
}
export default Skill;