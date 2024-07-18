import {social} from "../data"
import { currentYear } from "../data";
function Footer({theme}){
    return(
        <footer>
            <ul>                
                {social.map((data)=>(                 
                <li key={data.id}>
                    <a href={data.href} target="_blank">
                        <img src={theme?data.img:data.imgDark}/>
                    </a>                    
                 </li>                                                       
                ))}
            </ul>
            <div className="copyright">
                <h2>Developed By Aman Kalabay</h2>
                <h5>Copyright &copy; {currentYear}, Aman Kalabay. All Rights Reserved</h5>
            </div>
        </footer>
    )
}
export default Footer;