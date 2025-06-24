import React from "react";
import { Line } from "react-chartjs-2";
import CurrentStats from "./CurrentStat";
import styles from "./BloodPressureLineChart.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BloodPressureLineChartProps {
  dateList: string[];
  systolicList: number[];
  diastolicList: number[];

  systolicValue: number;
  systolicLevels: string;
  diastolicValue: number;
  diastolicLevels: string;
}

const BloodPressureLineChart: React.FC<BloodPressureLineChartProps> = ({
  dateList,
  systolicList,
  diastolicList,
  systolicValue,
  systolicLevels,
  diastolicLevels,
  diastolicValue,
}) => {
  //data for the chart
  const data = {
    labels: dateList,
    datasets: [
      {
        label: "Dataset 1",
        data: systolicList,
        fill: false,
        borderColor: "#E66FD2",
        tension: 0.4,
        pointBackgroundColor: "#E66FD2",
        pointRadius: 6,
        pointBorderColor: "#F4F0FE",
        pointBorderWidth: 3,
      },
      {
        label: "Dataset 2",
        data: diastolicList,
        fill: false,
        borderColor: "rgba(153,102,255,1)",
        tension: 0.3,
        pointBackgroundColor: "rgba(153,102,255,1)",
        pointRadius: 6,
        pointBorderColor: "#F4F0FE",
        pointBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    pointLabel: {
      type: "pointLabel",
    },
  };

  return (
    <div className={styles.bloodPressureContainer}>
      <div className={styles.left_chart}>
        <div className={styles.heading}>
          <h3 className={styles.title}>Blood Pressure</h3>
          <div className={styles.display_date_container}>
            <span className={styles.display_date}>Last 6 months</span>
            <img
              className={styles.expand_more_icon}
              src="src/assets/main_icons/expand_more_icon.svg"
            />
          </div>
        </div>
        <Line className={styles.chart} data={data} options={options} />
      </div>

      <CurrentStats
        systolicValue={systolicValue}
        systolicLevels={systolicLevels}
        diastolicLevels={diastolicLevels}
        diastolicValue={diastolicValue}
      ></CurrentStats>
    </div>
  );
};

export default BloodPressureLineChart;
