import {social} from "../data"
import reactLogo from "../assets/reactHome.svg"
import classes from "./Home.module.css"
import TypingAnimation from "./TypingAnimation"
function Home({theme}){
    return(
        <section id="home">
            <div className={classes.social_network}>
                {social.map((item)=>(
                    <a key={item.id} target="_blank" href={item.href}><img className={classes.img} src={theme?item.imgDark:item.img} alt={item.name}/></a>
                ))}
            </div>  
            <div className={classes.home_info}>
                <h1>Hello I'm</h1>
                <h1>Aman Kalabay</h1>                
                <TypingAnimation/>
                <a href="#contact" className={classes.button}>Contact me</a>
            </div>
            <img className={classes.home_img} src={reactLogo} alt="logo"/>        
        </section>        
    )
}
export default Home;