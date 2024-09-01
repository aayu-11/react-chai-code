import "./App.css";
import BackGround from "./components/BackGround";
import ForeGround from "./components/ForeGround";

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800 overflow-x-hidden">
        <BackGround />
        <ForeGround />
      </div>
    </>
  );
}

export default App;
