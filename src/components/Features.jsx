import classes from "./Features.module.css";
import { other } from "../data"
export default function Features(){
    return(
        <section id="features">
              <div className={classes.head}>
                <span>Features</span>
                <h3>Introdation</h3>
            </div>
        
            <div className={classes.features}>
                {
                other.map(item=>(
                <div className={classes.item} key={item.id}>
                    <img className={classes.img} src={item.img}/>
                    <div className={classes.swipe}>
                        <h3>{item.name}</h3>
                        <span>{item.description}</span>
                    </div>
                </div>    
            ))}
        </div>
        
        
    </section>
    )
}