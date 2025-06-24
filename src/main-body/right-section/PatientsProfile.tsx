import styles from "./PatientsProfile.module.css";

import Listing from "../../conponents/Listing";
type PatientsInfo = [string, string, string, string, string, string];

interface PatientsProfileProps {
  patientsInfo: PatientsInfo[];
}

const PatientsProfile: React.FC<PatientsProfileProps> = ({ patientsInfo }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const birthday = String(patientsInfo[2]).split("/");

  const month = months[parseInt(birthday[0]) - 1];
  const day = birthday[1];
  const year = birthday[2];

  return (
    <div className={styles.patients_info_container}>
      {/*Profile Info */}
      <div>
        <div className={styles.profile_name_container}>
          <img className={styles.profile} src={`${patientsInfo[0]}`} />
          <span className={styles.patients_name}>{patientsInfo[1]}</span>
        </div>

        <ul className={styles.patients_list}>
          <Listing
            picture={`src/assets/main_icons/birth_icon.svg`}
            head={"Date Of Birth"}
            info1={`${month + " " + day + ", " + year}`}
            info2={null}
          ></Listing>
          <Listing
            picture={`src/assets/main_icons/female_icon.svg`}
            head={"Gender"}
            info1={`${patientsInfo[3]}`}
            info2={null}
          ></Listing>
          <Listing
            picture={`src/assets/main_icons/phone_icon.svg`}
            head={"Contact Info"}
            info1={`${patientsInfo[4]}`}
            info2={null}
          ></Listing>
          <Listing
            picture={`src/assets/main_icons/phone_icon.svg`}
            head={"Emergency Contacts"}
            info1={`${patientsInfo[5]}`}
            info2={null}
          ></Listing>
          <Listing
            picture={`src/assets/main_icons/insurance_icon.svg`}
            head={"Insurance Provider"}
            info1={`${patientsInfo[6]}`}
            info2={null}
          ></Listing>
        </ul>
      </div>
      <button className={styles.button}>Show All Information</button>
    </div>
  );
};

export default PatientsProfile;
