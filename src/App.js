import SetTimeInterval from "./components/SetTimeInterval";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import './styles/screen.css'

function App() {
  return (
    <section className="mainScreen">
      <Timer />
      <SetTimeInterval />
      <StartButton />
    </section>
  );
}

export default App;
