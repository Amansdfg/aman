import {useState} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Personal from "./components/Personal";
import Skill from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Porfolio from "./components/Porfolio";
import Features from "./components/Features";
import Resume from "./components/Resume";
import Card from "./components/Card";
import ScrollToTopButton from "./components/ScroolButtonTop";
import HorizontalScroll from "./components/Horizontal";
function App(){
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
      setTheme(!theme);
      document.body.style.setProperty('--bg-color', theme ? '#fff' : '#0f0c27');
      document.body.style.setProperty('--text-color', theme ? '#0f0c27' : '#fff');
  };

  return(
    <>
      <Header onChangeTheme={toggleTheme} theme={theme}/>
      <Home theme={theme}/>
      <Personal theme={theme}/>
      <Skill/>    
      <Card theme={theme}/>
      <Porfolio/>    
      <Features/>
      <HorizontalScroll/>
      <Resume/>
      <Contact theme={theme}/>
      <Footer theme={theme}/>    
      <ScrollToTopButton/>
    </>
  )
}
export default App;
