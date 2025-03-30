import React from "react";
import Chart from "chart.js/auto";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
            align: "end",
            position: "bottom",
          },
          title: {
            display: false,
            text: "Sales Charts",
            color: "white",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            grid: {
              color: "rgba(33, 37, 41, 0.3)",
            },
          },
          y: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    };

    var ctx = document.getElementById("line-chart").getContext("2d");

    if (window.myLine) {
      window.myLine.destroy(); // Hapus chart sebelumnya agar tidak terjadi error
    }

    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-white text-xl font-semibold">Sales value</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
