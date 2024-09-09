import classes from "./Card.module.css";
import { card } from "../data";
import { useRef,useEffect } from "react";
export default function Card( {theme}){
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

    return(
        <section ref={ref} className={classes.cardSection}>
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
    )
}