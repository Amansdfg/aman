import coding from "../assets/coding.gif";
import { skills } from "../data";
import {useEffect} from "react";
import { card } from "../data";
import classes from "./Skills.module.css"
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
            <div className={classes.head}>
                <span>Skills</span>
                <h3>Skills</h3>            
            </div>
            <div className={classes.skills}>
                <ul>
                    {skills.map((data)=>(
                        <li key={data.id} className={classes.skill}>
                            <div className={classes.skill_head}>
                                <span>{data.name}</span>
                                <h2>{data.skill}</h2>
                            </div>                                                    
                            <div className={classes.full_persent}>
                            </div>
                            <div style={{width:data.skill+"%"}} className={classes.persent}>
                            </div>
                        </li>    
                    ))}                                                
                </ul>                
                <img src={coding}/>
            </div>
            <div className={classes.cards}>                
                {card.map((item)=>(
                    <div className={classes.card} key={item.id}>
                    <div className={classes.inner}>
                        <div className={classes.front}>
                            <img src={!theme?item.img:item.imgDark}/>
                            <h2>{item.head}</h2>
                            <span>{item.text}</span>
                        </div>
                        <div className={classes.back}>
                            <img src={!theme?item.imgBack:item.imgBackDark}/>                        
                            <h2>{item.headBack}</h2>
                            <span>{item.textBack}</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </section>

    )
}
export default Skill;