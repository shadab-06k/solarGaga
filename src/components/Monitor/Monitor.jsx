import React, { useState, useEffect } from "react";
import RecTable from "../RecTable/RecTable";
import Sidebar from "../Sidebar/Sidebar";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Monitor.css";
import bulbImage from "../../assets/bulb 1.svg";
import solarImage from "../../assets/solar-panel 1.svg";
import batteryImage from "../../assets/battery 1.svg";
import powerImage from "../../assets/energy 1.svg";
// Register the components you need for Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Monitor = () => {
  // State to store overview data
  const [overviewData, setOverviewData] = useState({
    totalPowerGeneration: "0KW",
    solarPanel: 0,
    savedInBattery: "0KW",
    totalConsumption: "0KW",
  });

  // Fetch the overview data from the API
  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/overview/getItems"
        );
        const result = await response.json();

        if (result.success && result.items.length > 0) {
          const {
            totalPowerGeneration,
            solarPanel,
            savedInBattery,
            totalConsumption,
          } = result.items[0];
          setOverviewData({
            totalPowerGeneration,
            solarPanel,
            savedInBattery,
            totalConsumption,
          });
        } else {
          console.error("Failed to fetch overview data");
        }
      } catch (error) {
        console.error("Error fetching overview data:", error);
      }
    };

    fetchOverviewData();
  }, []);

  // Bar chart data
  const data = {
    labels: ["Jan", "Mar", "May", "Jul"],
    datasets: [
      {
        label: "Views",
        data: [20, 40, 30, 50, 70, 90], // sample data
        backgroundColor: "#2d3436",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="Monitor-full-container">
      <Sidebar />
      <div className="monitor-main-container">
        <div className="customize-main-div">
          <div>
            <h2>Overview</h2>
            <h6>Key values for Exchange</h6>
          </div>
          <div className="customize-div">
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3ZM20 3H14C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H20C20.2652 11 20.5196 10.8946 20.7071 10.7071C20.8946 10.5196 21 10.2652 21 10V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3ZM10 13H4C3.73478 13 3.48043 13.1054 3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM18 14H16V16H14V18H16V20H18V18H20V16H18V14Z"
                  fill="black"
                />
              </svg>
              Customize
            </h5>
          </div>
        </div>

        <div className="monitor-upper">
          <div className="monitor-inner-div">
            {/* Displaying dynamic data fetched from API */}
            <div className="monitor-inner-div-card">
              <h3>{overviewData.totalPowerGeneration}</h3>
              <p>Total Power Generation</p>
              <div className="card-icon sun">
                <img src={bulbImage} alt="Power Icon" />
              </div>
            </div>
            <div className="monitor-inner-div-card">
              <h3>{overviewData.solarPanel}</h3>
              <p>Solar Panels</p>
              <div className="card-icon panel">
                <img src={solarImage} alt="Solar Panel Icon" />
              </div>
            </div>
            <div className="monitor-inner-div-card">
              <h3>{overviewData.savedInBattery}</h3>
              <p>Saved in Battery</p>
              <div className="card-icon battery">
                <img src={batteryImage} alt="Battery Icon" />
              </div>
            </div>
            <div className="monitor-inner-div-card">
              <h3>{overviewData.totalConsumption}</h3>
              <p>Total Consumption</p>
              <div className="card-icon consumption">
                <img src={powerImage} alt="Consumption Icon" />
              </div>
            </div>
          </div>

          <div className="photograph-container">
            <h3>Device Photograph</h3>
            <Bar data={data} options={options} />
            <p className="performance-text">
              <strong>30%</strong> Your sales performance is 30% better compared
              to last month
            </p>
            <button className="details-button">Details</button>
          </div>
        </div>

        <RecTable />
      </div>
    </div>
  );
};

export default Monitor;
