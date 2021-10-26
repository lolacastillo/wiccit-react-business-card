import './styling/App.css';
import Logo from "./Components/Logo";
import About from "./Components/About";
import useScript from "./hooks/useScripts";
import Navbar from "./Components/Navbar";

function App() {
    useScript("../src/myScript.js")

    return (
      <div className="">
        <Logo/>
      <Navbar/>
      <About/>
      <About/>
      </div>
  );
}

export default App;
