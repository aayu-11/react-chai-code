import "./App.css";
import { AddTodo, Todos } from "./components";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
