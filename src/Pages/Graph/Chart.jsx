import React, { useEffect, useState } from "react";
import { Chart, Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import axios from "axios";

Chartjs.register(LineElement, PointElement, CategoryScale, LinearScale);

const Charts = () => {
  const [populationData, setPopulationData] = useState([]);

  const convertToMillion = (data) => {
    return data.map((entry) => {
      return {
        Year: entry.Year,
        Population: entry.Population / 1000000,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setPopulationData(convertToMillion(response.data.data));
        console.log("Population data:", response.data.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: populationData.map((entry) => entry.Year).reverse(),
    datasets: [
      {
        label: "Dataset",
        data: populationData.map((entry) => entry.Population).reverse(),
        fill: false,
        hoverBackgroundColor: "#36013f",
        borderColor: "#36013f",
        pointBorderColor: "#36013f",
        backgroundColor: "#36013f",
        borderCapStyle: "round",
        hoverBackgroundColor: "grey",
        pointhoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        tension: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      filler: {
        propagate: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          font: {
            size: 20,
            family: "Montserrat",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Population (in million)",
          font: {
            size: 20,
            // weight: "bold",
            family: "Montserrat",
          },
        },
      },
    },
  };
  return (
    <div div className="chart-top">
      {" "}
      <div className="chart-head">US Population Data Over the years</div>
      <div className="chart-main">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;
