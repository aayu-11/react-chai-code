import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-red-400 text-black p-4 m-4 rounded">Tailwind css</h1>
      <Card username="chai aur code" btnTxt="click me" />
      <Card username="hitesh choudhary" />
    </>
  );
}

export default App;
