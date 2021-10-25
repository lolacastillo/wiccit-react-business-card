import './styling/App.css';
import Logo from "./Components/Logo";
import Icons from "./Components/Icons"
import Cbody from "./Components/Cbody";
import useScript from "./hooks/useScripts";

function App() {
    useScript("../src/myScript.js")

    return (
      <div className="">
        <Logo/>
      <Icons/>
      <Cbody/>
      <Cbody/>
      </div>
  );
}

export default App;
