import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails.js";
import TaskManager from "./Components/TaskManager/TaskManager.js";
import GanttChart from "./Components/GanttChart/GanttChart.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/gantt" element={<GanttChart />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
