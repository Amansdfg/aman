import coding from "../assets/coding.gif";
import { skills } from "../data";
import { useEffect, useRef } from "react";
import { card } from "../data";
import classes from "./Skills.module.css";

function Skill({ theme }) {
    const skillRef = useRef([]);
    const ref=useRef(null);
    useEffect(()=>{
        function handleIntersection(entries,observer){
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add(classes.animateSection);
                    observer.unobserve(entry.target);
                }
            })
        }
        const observer=new IntersectionObserver(handleIntersection,{threshold:0.3});
        const section=ref.current;
        if(section){
            observer.observe(section);
        }
        return () => {
            if (section) observer.unobserve(section);
        };
    },[])
    useEffect(() => {
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(classes.animate);
                    entry.target.style.width = entry.target.style.getPropertyValue('--skill-width');
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

        skillRef.current.forEach(target => observer.observe(target));

        return () => {
            skillRef.current.forEach(target => observer.unobserve(target));
        };
    }, []);

    return (
        <section id="skills" ref={ref} className={classes.skillSection}>
            <div className={classes.head}>
                <span>Skills</span>
                <h3>Skills</h3>
            </div>
            <div className={classes.skills}>
                <ul>
                    {skills.map((data, index) => (
                        <li key={data.id} className={classes.skill}>
                            <div className={classes.skill_head}>
                                <span>{data.name}</span>
                                <h2>{data.skill}%</h2>
                            </div>
                            <div className={classes.full_persent}></div>                                                    
                            <div
                                style={{ 
                                    '--skill-width': data.skill + "%",
                                width: 0
                                }}
                                className={classes.persent}
                                ref={el => (skillRef.current[index] = el)}
                            ></div>
                        </li>
                    ))}
                </ul>
                <img src={coding} alt="Coding GIF" />
            </div>
            <div className={classes.cards}>
                {card.map((item) => (
                    <div className={classes.card} key={item.id}>
                        <div className={classes.inner}>
                            <div className={classes.front}>
                                <img src={!theme ? item.img : item.imgDark} alt={item.head} />
                                <h2>{item.head}</h2>
                                <span>{item.text}</span>
                            </div>
                            <div className={classes.back}>
                                <img src={!theme ? item.imgBack : item.imgBackDark} alt={item.headBack} />
                                <h2>{item.headBack}</h2>
                                <span>{item.textBack}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;
