import React from "react";
import ReactApexChart from "react-apexcharts";
import Loader from "./Loader";

const Piechart = () => {
  const labels = ["Pending", "Active", "Rejected"];
  const series = [50, 30, 20];

  const options = {
    chart: {
      type: "donut",
      background: "transparent",
    },
    labels: labels,
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
        },
      },
    },
    legend: {
      position: "bottom",
      flex: "column",
      labels: {
        colors: "#000000",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["transparent"],
      },
    },
    colors: ["#F6B000", "#4CAF50", "#F44336"], // Yellow for Pending, Green for Active, Red for Rejected
  };

  return (
    <div className="w-[400px]">
      <ReactApexChart  options={options} series={series} type="donut" />
    </div>
  );
};

export default Piechart;
