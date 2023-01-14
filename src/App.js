import { useContext } from "react";
import SetTimeInterval from "./components/SetTimeInterval";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import MyContext from "./context/Context";
import './styles/screen.css'

function App() {
  const { totalHours, totalMinutes, totalSeconds } = useContext(MyContext)
  return (
    <section className="mainScreen">
      <head>
        <title>{ `${totalHours}:${totalMinutes}:${totalSeconds}` }</title>
      </head>
      <Timer />
      <SetTimeInterval />
      <StartButton />
    </section>
  );
}

export default App;
