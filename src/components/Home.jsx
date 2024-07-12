import {social} from "../data"
import reactLogo from "../assets/react.svg"
function Home(){
    return(
        <section id="home">
            <div className="social-network">
                {social.map((item)=>(
                    <a key={item.id} target="_blank" href={item.href}><img src={item.img} alt={item.name}/></a>
                ))}
            </div>  
            <div className="home-info">
                <h2>Hello I'm</h2>
                <h1>Aman Kalabay</h1>
                <h2>Backend Developer</h2>
            </div>
            <div className="home-img">
                <img src={reactLogo} alt="logo"/>
            </div>   
        </section>        
    )
}
export default Home;