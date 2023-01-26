import { useContext } from "react";
import { Engine } from "react-matter-js";
import DarkModeSwitch from "./components/DarkModeSwitch";
import SetTimeInterval from "./components/SetTimeInterval";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import MyContext from "./context/Context";
import './styles/screen.css'

function App() {
  const { totalHours, totalMinutes, totalSeconds, darkMode } = useContext(MyContext)
  
  return (
    <section className={`${darkMode ? 'lightMode' : 'darkMode'} mainScreen`}>
      <Engine options={{}}>
        <>
          <title>{ `${totalHours}:${totalMinutes}:${totalSeconds}` }</title>
        </>
        <Timer />
        <SetTimeInterval />
        <StartButton />
        <DarkModeSwitch  />
      </Engine>
    </section>
  );
}

export default App;
