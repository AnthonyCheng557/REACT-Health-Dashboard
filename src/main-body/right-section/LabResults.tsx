import styles from "./LabResults.module.css";

interface LabResultsProps {
  labResults: string[];
}

const LabResults: React.FC<LabResultsProps> = ({ labResults }) => {
  return (
    <div className={styles.lab_results_container}>
      <h1>Lab Results</h1>

      <ul className={styles.results_list}>
        {labResults.map((info) => (
          <li key={info[0]} style={{ marginBottom: "10px" }}>
            <div className={styles.listing}>
              <div style={{ padding: "0 10px", flex: 1 }}>{info}</div>
              <img
                className={styles.download_icon}
                src="src/assets/main_icons/download_icon.svg"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
