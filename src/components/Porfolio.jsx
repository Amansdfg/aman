import { porfolio } from "../data";
const Porfolio=()=>{
    return(
        <section id="portfolio">
             <div className="head">
                <span>Porfolio</span>
                <h3>My Projects</h3>
            </div>
            <ul className="projects">
                {porfolio.map(item=>(
                 <li key={item.id} className="project-img">
                    <a href="https://amansdfg.github.io/Tic-Tac-Toe/">
                        <img src={item.img} alt={item.text}/>
                    </a>
                 </li>   
                ))}
            </ul>
        </section>
    )
}
export default Porfolio;