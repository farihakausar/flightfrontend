import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import MainPage from "./screens/MainPage";
import Sale from "./screens/Sale";

function App() {
  return (
    <>
      <MainPage />
      {/* <Sale /> */}
    </>
  );
}

export default App;
