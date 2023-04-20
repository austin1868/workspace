import React, { useEffect } from "react";
import { GanttChart as ToastGanttChart } from "@toast-ui/react-gantt-chart";
import "tui-gantt/dist/tui-gantt.min.css";
import "./GanttChart.css";

function GanttChart() {
  const data = {
    columns: [
      { name: "Task", id: "title" },
      { name: "Start Date", id: "start" },
      { name: "End Date", id: "end" }
    ],
    tasks: [
      {
        id: 1,
        title: "Task 1",
        start: "2023-05-01",
        end: "2023-05-05"
      },
      {
        id: 2,
        title: "Task 2",
        start: "2023-05-06",
        end: "2023-05-09"
      }
    ]
  };

  return (
    <div className="gantt-chart">
      <h1>Gantt Chart</h1>
      <ToastGanttChart data={data} />
    </div>
  );
}

export default GanttChart;
