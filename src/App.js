import { useContext } from "react";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Menu from "./components/Menu";
import SetTimeInterval from "./components/SetTimeInterval";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import MyContext from "./context/Context";
import './styles/screen.css'

function App() {
  const { totalHours, totalMinutes, totalSeconds, darkMode } = useContext(MyContext)
  
  return (
    <section className={`${darkMode ? 'lightMode' : 'darkMode'} mainScreen`}>
      <>
        <title>{ `${totalHours}:${totalMinutes}:${totalSeconds}` }</title>
      </>
      <Timer />
      <SetTimeInterval />
      <StartButton />
      <DarkModeSwitch  />
      <Menu />
    </section>
  );
}

export default App;
