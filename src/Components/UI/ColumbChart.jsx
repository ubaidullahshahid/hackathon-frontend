import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumbChart = () => {
  // Dummy data for token counts based on time (e.g., Hour: Tokens)
  const series = [
    {
      name: "Tokens Received",
      data: [14, 20, 25, 10, 30, 40, 15], // Data for tokens received at different hours (14 at 14:00, 20 at 15:00, etc.)
    },
  ];

  const options = {
    chart: {
      type: "bar", // Column chart
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false, // Set to true if you want horizontal bars
        columnWidth: "50%", // Adjust the width of the columns
      },
    },
    xaxis: {
      categories: ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"], // Time or date-wise categories
    },
    yaxis: {
      title: {
        text: "Tokens Received",
      },
    },
    title: {
      text: "Tokens Received by Hour",
      align: "center",
    },
    colors: ["#4CAF50"], // Customize the column color (Green for Tokens)
  };

  return (
    <div className="w-[600px]">
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
  );
};

export default ColumbChart;
