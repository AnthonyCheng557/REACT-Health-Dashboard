import React from "react";
import styles from "./Listing.module.css";

interface ListingsProps {
  picture?: string;
  head?: string;
  info1?: string;
  info2?: string | null;
}

const Listing: React.FC<ListingsProps> = ({
  picture = null,
  head = null,
  info1 = null,
  info2 = null,
}) => {
  return (
    
    <div>
      {/*modulized, if info2 is null, then create listing for profile*/}

      {info2 == null ? (
        <div className={styles.container2}>
          <img className={styles.picture} src={`${picture}`} alt="" />
          <div className={styles.styleList}>
            <span>{head}</span>
            <span className={styles.info_profile}>{info1}</span>
          </div>
        </div>
      ) : (
        <div className={styles.container1}>
          <img className={styles.picture} src={`${picture}`} alt="" />
          <div className={styles.styleList}>
            <span className={styles.head_grp_list}>{head}</span>
            <span className={styles.info_grp_list}>{info1 + ", " + info2}</span>
          </div>
          <div className={styles.hori_more_icon}>
            <img src="src/assets/navbar_icons/hori_more_icon.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;
