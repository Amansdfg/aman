import coding from "../assets/coding.gif";
import { skills } from "../data";
function Skill(){
    return(
        <section id="skills">
            <div className="personal-head">
                <h3>Skills</h3>            
            </div>
            <div className="skills">
                <ul>
                    {skills.map((data)=>(
                        <li key={data.id} className="skill">
                            <div className="skill-head">
                                <span>{data.name}</span>
                                <h2>{data.skill}</h2>
                            </div>                                                    
                            <div className="full-persent">
                            </div>
                            <div style={{width:data.skill+"%"}} className="persent">
                            </div>
                        </li>    
                    ))}
                    <li>

                    </li>
                </ul>                
                <img src={coding}/>
            </div>

        </section>
    )
}
export default Skill;