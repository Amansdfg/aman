import { useEffect, useRef } from "react";
import { porfolio } from "../data";
import classes from "./Portfolio.module.css";

function Portfolio(){
    const portfolioRef = useRef(null);
    useEffect(() => {
        function handleIntersection(entries, observer){
            entries.forEach(entry =>{
                if (entry.isIntersecting){
                    entry.target.classList.add(classes.animateSection);
                    observer.unobserve(entry.target);
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
        const section = portfolioRef.current;
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="portfolio" ref={portfolioRef} className={classes.portfolioSection}>
            <div className={classes.head}>
                <span>Portfolio</span>
                <h3>My Projects</h3>
            </div>
            <ul className={classes.projects}>
                {porfolio.map(item => (
                    <li key={item.id} className={classes.project_item}>
                        <a href={item.href}>
                            <img src={item.img} alt={item.title} />
                            <div className={classes.project_content}>
                                <p className={classes.content_title}>{item.title}</p>
                                <p className={classes.content_description}>{item.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Portfolio;
