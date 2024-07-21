import { header } from "../data";
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg";
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { useState } from "react";
function Header({onChangeTheme,theme}){
    const[isOpen,setIsOpen]=useState(true);
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
            <ul>
                {header.list.map((item)=>(
                    <li key={item.name}><a href={item.href}>{item.name}</a></li>
                ))}                    
            </ul>
            }
            <button hidden={isOpen} onClick={()=>onChangeTheme()} id="darkmode"><img src={theme?sun:moon} alt="aman" className={theme?"active":null}/></button>
            <button onClick={()=>open()} className="menu" hidden> <img src={isOpen?menu:close} alt="aman"/></button>
        </header>
    )
}
export default Header;