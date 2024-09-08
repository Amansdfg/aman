import { header } from "../data";
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg";
import menu from "../assets/menu.svg"
import menuDark from "../assets/menuDark.svg"
import close from "../assets/close.svg"
import closeDark from "../assets/closeDark.svg"
import { useState } from "react";
import { useParams } from "react-router";
import classes from "./Header.module.css"
function Header({onChangeTheme,theme}){
    const param=useParams();    

    const[isOpen,setIsOpen]=useState(false);
    function open(){
        setIsOpen(prev=>!prev);        
    }    
    return(
        <header>        
            <div className={classes.header}>
                <h1 className={classes.header_h1}>{header.full_name}</h1>            
                <ul className={`${classes.header_ul} ${classes.nav} ${isOpen ? classes.open : ''}`}>
                    {header.list.map((item)=>(
                        <li key={item.name}><a className={classes.header_a} href={item.href}>{item.name}</a></li>
                    ))}                    
                </ul>            
                <img onClick={()=>onChangeTheme()} src={theme?sun:moon} alt="aman" className={classes.darkmode+" "+theme?classes.active:''}/>                     
                <img onClick={()=>open()} className={classes.btn_menu +" "+classes.menu} src={isOpen?(theme?closeDark:close):(!theme?menu:menuDark)} alt="aman"/>            
            </div>
        {
            isOpen &&
        <div className={classes.mobile_menu}>
            <div className={classes.mobile_menu_div}>
                {header.list.map((data)=>(
                    <a  className={classes.mobile_menu_a} key={data.name} href={data.href}>{data.name}</a>
                ))}
            </div>
        </div>
        }
        </header>
    
    )
}
export default Header;