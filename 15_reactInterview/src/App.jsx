import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  console.log("App Rendered");
  const [value, setValue] = useState({
    value: 0,
  });
  //const [multipliedValue, setMultipliedValue] = useState(5);
  // In React, if a state is completely dependent on another state, you can indeed derive its value directly from the other state without needing to manage it as a separate state with the useState hook. This is because the derived value will be recalculated every time the dependent state changes, ensuring that it always reflects the latest value.
  // When You Might Still Need useState:
  // If the derived value needs to be independently modified or if its calculation is expensive and you want to memoize it (e.g., with useMemo), then you might consider additional state or hooks.

  // a. Do you want to explore how to memoize a derived value with useMemo for performance?
  // b. Interested in best practices for handling expensive state derivations in React?

  // const multiplyByFive = () => {
  //   setValue(value + 1);
  // };
  // const multipliedValue = value * 5;

  const clickMe = () => {
    console.log("logged");
    setValue({
      value: 0,
    });
  };
  // in above code the app will be rerendered when the button is clicked because the state is being updated with the same value. This is because of data type of value is object and it is not a primitive data type. So the every time button is clicked a new object is created and the reference of the object is changed. So the app is rerendered. Since the object's reference is changed, React thinks that the state has changed and triggers a re-render.
  // this is the same reason why we can update the array and object in javascript even if they are declared as const. Because the reference of the object or array is changed and not the value of the object or array.

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [value]);
  // in the above code the useEffect will be called every time the value is changed. Since the value is an object and the reference of the object is changed every time the button is clicked, the useEffect will be called every time the button is clicked. This is because the reference of the object is changed every time the button is clicked and the useEffect is called every time the reference of the object is changed.

  useEffect(() => {
    console.log("useEffect called");
  }, [value.value]);
  // in the above code the useEffect will be called only when the value of the object is changed. Since the value of the object is changed every time the button is clicked, the useEffect will be called every time the button is clicked. This is because the value of the object is changed every time the button is clicked and the useEffect is called every time the value of the object is changed.

  return (
    <>
      <h1>Main Value: {value.value} </h1>
      <button onClick={clickMe}>Click me</button>
      {/* <h2>Multiplied value: {multipliedValue}</h2> */}
    </>
  );
}

export default App;
