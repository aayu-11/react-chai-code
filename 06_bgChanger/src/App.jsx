import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("black");
  const [shadow, setShadow] = useState("cyan");
  return (
    <>
      <div
        className="w-full h-screen duration-300 "
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2 border-gray-500 rounded-md w-auto h-12 m-4 p-2 bg-cyan-700 shadow-lg shadow-cyan-400 hover:cursor-pointer duration-500"
          style={{
            boxShadow: `0 4px 6px -1px ${shadow}, 0 2px 4px -1px ${shadow}`,
          }}
        >
          <ColorButton
            color="olive"
            setColor={setColor}
            setShadow={setShadow}
          />
          <ColorButton
            color="maroon"
            setColor={setColor}
            setShadow={setShadow}
          />
          <ColorButton
            color="seaGreen"
            setColor={setColor}
            setShadow={setShadow}
          />
          <ColorButton
            color="skyblue"
            setColor={setColor}
            setShadow={setShadow}
          />
          <ColorButton
            color="hotpink"
            setColor={setColor}
            setShadow={setShadow}
          />
          <ColorButton color="gray" setColor={setColor} setShadow={setShadow} />
          <ColorButton
            color="orange"
            setColor={setColor}
            setShadow={setShadow}
          />
          <ColorButton
            color="purple"
            setColor={setColor}
            setShadow={setShadow}
          />
        </div>
      </div>
    </>
  );
}

export default App;
