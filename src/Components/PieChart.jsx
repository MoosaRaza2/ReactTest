import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ rows }) => {
  const data = {
    labels: ["Passed", "Failed", "Skipped", "Pending", "Undefined"],
    datasets: [
      {
        label: "Test Results",
        data: [
          rows.reduce((sum, row) => sum + row.passed, 0),
          rows.reduce((sum, row) => sum + row.Failed, 0),
          rows.reduce((sum, row) => sum + row.skipped, 0),
          rows.reduce((sum, row) => sum + row.pending, 0),
          rows.reduce((sum, row) => sum + row.Undefined, 0),
        ],
        backgroundColor: [
          "#90EE90",
          "#FFCCCB",
          "#CBC3E3",
          "#FFFFE0",
          "#FFD580",
        ],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default PieChart;
