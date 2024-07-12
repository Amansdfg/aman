import { header } from "../data";
import sun from "../assets/sun.svg"
function Header(){
    return(
        <header>        
            <h1>{header.full_name}</h1>
            <ul>
                {header.list.map((item)=>(
                    <li key={item.name}><a href={item.href}>{item.name}</a></li>
                ))}    
                <button id="darkmode"><img src={sun} alt="aman"/></button>
            </ul>
        </header>
    )
}
export default Header;