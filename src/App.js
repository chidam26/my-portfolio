import About from "./Components/About/About";
import Intro from "./Components/Introduction/Intro";
import Productlist from "./Components/ProductList/productlist";
import Bloglist from "./Components/Blog list/Bloglist";
import Contact from "./Components/Contact/Contact";
import Toggle from "./Components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./Context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      
        <div>
          <Toggle/>
          <Intro/>
          <About/>
          <Productlist/>
          <Bloglist/>
          <Contact/>
          </div>
    
    </div>
  );
}

export default App;
