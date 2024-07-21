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
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsOpen(true);
        }
    }
    return(
        <header>        
            <h1>{header.full_name}</h1>
            {
            !isOpen &&
            <>
                <ul>
                    {header.list.map((item)=>(
                        <li key={item.name}><a href={item.href}>{item.name}</a></li>
                    ))}                    
                </ul>            
                <button  onClick={()=>onChangeTheme()} id="darkmode"><img src={theme?sun:moon} alt="aman" className={theme?"active":null}/></button>
            </>
            }
            <button onClick={()=>open()} className="menu" hidden> <img className="btn-menu" src={isOpen?(theme?menuDark:menu):(!theme?close:closeDark)} alt="aman"/></button>
        </header>
    )
}
export default Header;