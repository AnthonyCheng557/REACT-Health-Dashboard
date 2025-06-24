import React from "react";
import Dot from "../../conponents/Dot";
import styles from "./CurrentStat.module.css";

interface CurentStatsProps {
  systolicValue: number;
  systolicLevels: string;
  diastolicValue: number;
  diastolicLevels: string;
}

const CurrentStats: React.FC<CurentStatsProps> = ({
  systolicValue,
  systolicLevels,
  diastolicLevels,
  diastolicValue,
}) => {
  return (
    <div className={styles.currentStatsContainer}>
      <div className={styles.legend}>
        <Dot color="#E66FD2" size="15px"></Dot>

        <span className={styles.label_name}>Systolic</span>
      </div>

      <h2 className={styles.heading}>{systolicValue}</h2>
      <div className={styles.levelContainer}>
        <img src="src/assets/main_icons/arrow_up.svg" alt="Overview" />
        <span className={styles.levels}>{systolicLevels}</span>
      </div>
      {/*dividing*/}
      <div className={styles.navbarHoriLine}></div>
      {/*dividing*/}
      <div className={styles.legend}>
        <Dot color="#8C6FE6" size="15px"></Dot>
        <span className={styles.label_name}>Diastolic</span>
      </div>
      <h2 className={styles.heading}> {diastolicValue}</h2>
      <div className={styles.levelsContainer}>
        <img src="src/assets/main_icons/arrow_down.svg" alt="Overview" />
        <span className={styles.levels}>{diastolicLevels}</span>
      </div>
    </div>
  );
};

export default CurrentStats;
