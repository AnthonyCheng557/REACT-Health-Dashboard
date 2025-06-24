import React from "react";
import styles from "./Navbar.module.css";

//define types for props
interface NavbarProps {
  title: string;
}

// Functional for Navbar
const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="src/assets/navbar_icons/logo.svg" alt="logo" />
      </div>

      {/* Navbar */}
      <ul className={styles.navbarList}>
        {/* Overview */}
        <li className={styles.navbarOptions}>
          <img src="src/assets/navbar_icons/overview_icon.svg" alt="Overview" />
          <a href="/" className={styles.anchor}>
            Overview
          </a>
        </li>
        {/* Patients */}
        <li className={styles.navbarOptions}>
          <img src="src/assets/navbar_icons/patients_icon.svg" alt="Patients" />
          <a href="/" className={styles.anchor}>
            Patients
          </a>
        </li>
        {/* Schedule */}
        <li className={styles.navbarOptions}>
          <img src="src/assets/navbar_icons/schedule_icon.svg" alt="Schedule" />
          <a href="/" className={styles.anchor}>
            Schedule
          </a>
        </li>
        {/* Message */}
        <li className={styles.navbarOptions}>
          <img src="src/assets/navbar_icons/message_icon.svg" alt="Message" />
          <a href="/" className={styles.anchor}>
            Message
          </a>
        </li>
        {/* Transactions */}
        <li className={styles.navbarOptions}>
          <img
            src="src/assets/navbar_icons/transactions_icon.svg"
            alt="Transactions"
          />
          <a href="/" className={styles.anchor}>
            Transactions
          </a>
        </li>
      </ul>

      {/* NavProfile */}
      <div className={styles.navbarProfileContainer}>
        <img
          src="src/assets/profile_pictures/senior_doctor1.png"
          alt="Senior_doctor1"
        />
        <div className={styles.navbarProfile}>
          <span>Dr. Jose Simmons</span>
          <span className={styles.profile_title}>General Practitioner</span>
        </div>
        {/* pipe grey vertical line */}
        <div className={styles.navbarVerticleLine}></div>

        {/* Gear Icon */}
        <div>
          <img src="src/assets/navbar_icons/gear_icon.svg" alt="Gear" />
        </div>
        {/* More Icon */}
        <div>
          <img src="src/assets/navbar_icons/more_icon.svg" alt="More" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
