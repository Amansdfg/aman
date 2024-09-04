import classes from "./Container.module.css";
import { other } from "../data"
export default function Container(){
    return(
        <section id="container">
        {
        other.map(item=>(
            <div className={classes.item} key={item.id}>
                <img className={classes.img} src={item.img}/>
                <div className={classes.swipe}>
                    <h3>{item.name}</h3>
                    <span>{item.description}</span>
                </div>
            </div>    
        ))
        }
    </section>
    )
}