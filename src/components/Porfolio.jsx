import { porfolio } from "../data";
import classes from "./Portfolio.module.css"
const Porfolio=()=>{
    return(
        <section id="portfolio">
             <div className={classes.head}>
                <span>Porfolio</span>
                <h3>My Projects</h3>
            </div>
            <ul className={classes.projects}>
                {porfolio.map(item=>(
                 <li key={item.id} className={classes.project_item}>
                    <a href={item.href}>
                        <img src={item.img} alt={item.title}/>
                        <div className={classes.project_content}>
                            <p className={classes.content_title}>{item.title}</p>
                            <p className={classes.content_description}>{item.description}</p>
                        </div> 
                    </a>                
                 </li>           
                ))}
    
            </ul>
        </section>
    )
}
export default Porfolio;