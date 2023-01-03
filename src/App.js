import { useContext } from "react";
import SetTimeInterval from "./components/SetTimeInterval";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import MyContext from "./context/Context";
import './styles/screen.css'

function App() {
  const { timerAppears } = useContext(MyContext);

  return (
    <section className="mainScreen">
      <Timer />
      {timerAppears && (<SetTimeInterval />)}
      {timerAppears && (<StartButton />)}
    </section>
  );
}

export default App;
