import img from "../assets/GGG.png"
import { other } from "../data"
export default function Container(){
    return(
        <section id="container">
        {
        other.map(item=>(
            <div className="item">
                <img className="img" src={item.img}/>
                <div className="swipe">
                    <h3>{item.name}</h3>
                    <span>{item.description}</span>
                </div>
            </div>    
        ))
        }
    </section>
    )
}