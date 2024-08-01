// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

const Element = {
  type: 'a',
  props: {
    href: 'http://google.com',
    target: '_blank'
  },
  children: 'click me to visit google'
}
const anotherElement = (
  <a href="http://google.com" target="_blank">click me to visit google</a>
)
const anotherUser = 'Hitesh'
const reactElement = React.createElement(
  'a',
  {
    href: 'http://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp()
  reactElement
  // anotherElement   // it will work
  /* 
  <React.StrictMode>
    <App />
    Element  // it will not work bcz sytanx is not correct
  </React.StrictMode>
   */
)
