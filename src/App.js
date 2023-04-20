import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import TaskManager from "./components/TaskManager/TaskManager";
import GanttChart from "./components/GanttChart/GanttChart";
import "./App.css";

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
