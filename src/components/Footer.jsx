import {social} from "../data"
import { currentYear } from "../data";
import classes from './Footer.module.css';
function Footer({theme}){
    return(
        <footer className={classes.footer}>
            <ul className={classes.ul}>                 
                {social.map((data)=>(                 
                <li key={data.id}>
                    <a href={data.href} target="_blank">
                        <img className={classes.img} src={theme?data.img:data.imgDark}/>
                    </a>                    
                 </li>                                                       
                ))}
            </ul>
            <div className={classes.copyright}>
                <h2>Developed By Aman Kalabay</h2>
                <h5>Copyright &copy; {currentYear}, Aman Kalabay. All Rights Reserved</h5>
            </div>
        </footer>
    )
}
export default Footer;