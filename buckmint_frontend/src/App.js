import react from "react";
import "./App.css";
import Overview from "./components/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Bridge from "./components/Bridge/Bridge.jsx";
import Pools from "./components/Pools/Pools.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="side">
                  <Sidebar />
                </div>
                <Overview />
              </div>
            }
          />
          <Route
            path="/bridge"
            element={
              <div>
                <div className="side">
                  <Sidebar />
                </div>
                <Bridge />
              </div>
            }
          />
          <Route
            path="/pools"
            element={
              <div>
                <div className="side">
                  <Sidebar />
                </div>
                <Pools />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
