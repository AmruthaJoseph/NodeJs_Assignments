import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const employeeData = {
    labels: ["Working", "Leave", "Others"],
    datasets: [
      {
        label: "Working",
        backgroundColor: ["blue", "red", "yellow"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [90, 35, 10],
      },
    ],
  };
  return (
    <div style={{ height: "500px", width: "400px", marginLeft: "20px" }}>
      <Pie
        data={employeeData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Employee Attendence Details",
              fontSize: 30,
            },
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
