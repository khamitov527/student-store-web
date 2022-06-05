import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <NavBar />
          <SubNavbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
