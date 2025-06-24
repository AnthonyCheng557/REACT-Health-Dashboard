import Listing from "../../conponents/Listing"; // Corrected the import path
import styles from "./PatientsListGrp.module.css";

type Patient = [string, string, number];

interface PatientsListGrpProps {
  patients_info: Patient[];
  onPatientSelect: (patientName: string) => void;
  //notify when selected
}

const PatientsListGrp: React.FC<PatientsListGrpProps> = ({ patients_info, onPatientSelect }) => {
  
  //function to handle patient selection
  const handlePatientClick = (patientName: string) => {
    onPatientSelect(patientName); 
    //notify the parent component
  };

  return (
    <div className={styles.patientsListContainer}>
      <div className={styles.headSearchContainer}>
        <h1 className={styles.heading}>Patients</h1>
        <img
          className={styles.searchIcons}
          src="src/assets/main_icons/search_icons.svg"
        />
      </div>

      <ul className={styles.patientsList}>
        {patients_info.map((info) => (
          <li
            key={info[0]}
            onClick={() => handlePatientClick(info[0])} 
            //trigger the patient selection on click
            style={{ cursor: "pointer" }}
          >
            <Listing
              picture={`src/assets/profile_pictures/patients_pictures/${(info[0] as string)
                .split(" ")[0]
                .toLowerCase()}_profile.png`}
              head={info[0]}
              info1={info[1]}
              info2={info[2].toString()}
            ></Listing>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsListGrp;

