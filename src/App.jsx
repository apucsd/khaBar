import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="my-container border ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
