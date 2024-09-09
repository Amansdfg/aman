import classes from "./Features.module.css";
import { other } from "../data";
import { useEffect, useRef } from "react";

export default function Features(){
    const ref = useRef(null);
    useEffect(()=>{
        function handleIntersection(entries, observer){
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    entry.target.classList.add(classes.animateSection);
                    observer.unobserve(entry.target);
                }
            });
        }
        const observer = new IntersectionObserver(handleIntersection,{ threshold: 0.3 });
        const section = ref.current;
        if (section) {
            observer.observe(section);
        }
        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);
    return (
        <section id="features" ref={ref} className={classes.featuresSection}>
            <div className={classes.head}>
                <span>Features</span>
                <h3>Introduction</h3>
            </div>

            <div className={classes.features}>
                {other.map(item => (
                    <div className={classes.item} key={item.id}>
                        <img className={classes.img} src={item.img} alt={item.name} />
                        <div className={classes.swipe}>
                            <h3>{item.name}</h3>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
