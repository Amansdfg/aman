import { useEffect, useRef } from "react"
import {personal_info} from "../data"
import classes from "./Personal.module.css"
export default function Personal({theme}){
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
    return(
        <section id="personal" ref={ref} className={classes.personSection}>
            <div className={classes.head}>
                <span>Aman Kalabay</span>
                <h3>Introdation</h3>
            </div>
            <div className={classes.personal_main}>
                <span>Good day! My name is Aman, and I'm a motivated student with a deep interest in Java development and programming. I am eager to learn and contribute to projects in the field.</span>
                <ul>
                    <li>What I can offer:</li>
                    <li>- A strong understanding of Java and its frameworks, including Spring and Java EE, and a willingness to apply this knowledge to build reliable and efficient applications.</li>
                    <li>- I am passionate about learning databases like PostgreSQL and utilizing REST API for backend interactions</li>
                    <li>- Proficiency in HTML, CSS, and JavaScript for developing user interfaces, with a focus on creating engaging and functional designs.. Experienced in utilizing Bootstrap and Tailwind CSS frameworks to enhance web development projects.</li>                
                    <li>- Familiarity with version control tools like Git at basic level, which I believe are essential for effective teamwork and collaboration.</li>
                </ul>
                <ul>
                    <li>My additional skills and motivation:</li>
                    <li>- I am constantly expanding my knowledge and skills by exploring new technologies and programming approaches. I am motivated by the opportunity to contribute to innovative solutions and improve my abilities as a developer.</li>
                </ul>
                <ul>
                    <li>My goals:</li>
                    <li>- I aspire to further develop my skills in Java development by learning new concepts and methodologies. My goal is to become an expert in this field and make meaningful contributions to projects I work on.</li>
                    <li>- I would be excited to discuss opportunities for contribute to your team's success!</li>
                    <li className={classes.text}>Aman Kalabay</li>
                </ul>
            </div>
            <div className={classes.personal_footer}>
                {personal_info.map((data)=>(
                    <div key={data.id} className={classes.personal_info}>
                        <img src={theme?data.imgDark:data.img} alt={data.name}/>
                        <span>{data.name}</span>
                    </div>
                ))}                              
            </div>
            <a href="/aman/Aman_Kalabay_CV.pdf" className={classes.button}>Download CV</a>
        </section>
    )
}