import { header } from "../data";
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg";
function Header({onChangeTheme,theme}){
    return(
        <header>        
            <h1>{header.full_name}</h1>
            <ul>
                {header.list.map((item)=>(
                    <li key={item.name}><a href={item.href}>{item.name}</a></li>
                ))}    
                <button onClick={()=>onChangeTheme()} id="darkmode"><img src={theme?sun:moon} alt="aman" className={theme?"active":null}/></button>
            </ul>
        </header>
    )
}
export default Header;