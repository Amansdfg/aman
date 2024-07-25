import { header } from "../data";
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg";
import menu from "../assets/menu.svg"
import menuDark from "../assets/menuDark.svg"
import close from "../assets/close.svg"
import closeDark from "../assets/closeDark.svg"
import { useState } from "react";
function Header({onChangeTheme,theme}){
    const[isOpen,setIsOpen]=useState(false);
    function open(){
        setIsOpen(prev=>!prev);        
    }    
    return(
        <header>        
            <div className="header">
            <h1>{header.full_name}</h1>            
            <ul className={`nav ${isOpen ? 'open' : ''}`}>
                {header.list.map((item)=>(
                    <li key={item.name}><a href={item.href}>{item.name}</a></li>
                ))}                    
            </ul>            
            <button  onClick={()=>onChangeTheme()} id="darkmode"><img src={theme?sun:moon} alt="aman" className={theme?"active":null}/></button>                    
            <button onClick={()=>open()} className="menu"> <img className="btn-menu" src={isOpen?(theme?closeDark:close):(!theme?menu:menuDark)} alt="aman"/></button>    
            </div>
        {
            isOpen &&
        <div id="mobile-menu">
            <div>
                {header.list.map((data)=>(
                    <a key={data.name} href={data.href}>{data.name}</a>
                ))}
            </div>
        </div>
        }
        </header>
    
    )
}
export default Header;