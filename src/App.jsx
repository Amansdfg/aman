import {useState} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Personal from "./components/Personal";
function App(){
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
      setTheme(!theme);
      document.body.style.setProperty('--bg-color', theme ? '#fff' : '#0f0c27');
      document.body.style.setProperty('--text-color', theme ? '#0f0c27' : '#fff');
  };

  return(
    <>
      <Header onChangeTheme={setTheme} theme={theme}/>
      <Home/>
      <Personal/>
      
    </>
  )
}
export default App;
