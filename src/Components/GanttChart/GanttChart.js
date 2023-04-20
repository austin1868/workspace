import React, { useEffect, useRef } from "react";
import TuiGanttChart from "tui-gantt";
import "tui-gantt/dist/tui-gantt.css";
import "./GanttChart.css";

function GanttChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const data = {
        columns: [
          { name: "Task", id: "title" },
          { name: "Start Date", id: "start" },
          { name: "End Date", id: "end" },
        ],
        tasks: [
          {
            id: 1,
            title: "Task 1",
            start: "2023-05-01",
            end: "2023-05-05",
          },
          {
            id: 2,
            title: "Task 2",
            start: "2023-05-06",
            end: "2023-05-09",
          },
        ],
      };

      new TuiGanttChart(chartRef.current, data, {});
    }
  }, []);

  return (
    <div className="gantt-chart">
      <h1>Gantt Chart</h1>
      <div ref={chartRef}></div>
    </div>
  );
}

export default GanttChart;
