import styles from "./DiagnosticList.module.css";

type Problem = [string, string, string];

interface DiagnosticProps {
  diagnosticList: Problem[];
}

const DiagnosticList: React.FC<DiagnosticProps> = ({ diagnosticList }) => {
  return (
    <div className={styles.diagnosticListContainer}>
      <h1>Diagnostic List</h1>

      {/* Header row */}
      <div className={styles.labels}>
        <span style={{ padding: "0 10px", flex: 1 }}>Problem/Diagnosis</span>
        <span style={{ padding: "0 50px", flex: 2 }}>Description</span>
        <span style={{ padding: "0 100px", flex: 1 }}>Status</span>
      </div>

      {/* List items */}
      <ul className={styles.diagnosticList}>
        {diagnosticList.map((info) => (
          <li key={info[0]}>
            <div className={styles.listing_container}>
              <div style={{ padding: "0 10px", flex: 1, fontSize: "15px" }}>
                {info[0]}
              </div>
              <div style={{ padding: "0 50px", flex: 2, fontSize: "15px" }}>
                {info[1]}
              </div>
              <div style={{ padding: "0 100px", flex: 1, fontSize: "15px" }}>
                {info[2]}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiagnosticList;
