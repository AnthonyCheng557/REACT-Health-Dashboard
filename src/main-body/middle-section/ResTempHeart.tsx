import Rectangle from "../../conponents/Rectangle";
import styles from "./ResTempHeart.module.css";

interface ResTempHeartProps {
  resValue: number;
  tempValue: number;
  heartValue: number;
  resLevels: string;
  tempLevels: string;
  heartLevels: string;
}

const ResTempHeart: React.FC<ResTempHeartProps> = ({
  resValue,
  tempValue,
  heartValue,
  resLevels,
  tempLevels,
  heartLevels,
}) => {
  return (
    <div className={styles.rectangleContainers}>
      <Rectangle
        backgroundColor="#E0F3FA"
        imageName="respiratory_rate"
        name="Respiratory Rate"
        value={resValue}
        levels={resLevels}
      ></Rectangle>
      <Rectangle
        backgroundColor="#FFE6E9"
        imageName="temperature"
        name="Temperature"
        value={tempValue}
        levels={tempLevels}
      ></Rectangle>
      <Rectangle
        backgroundColor="#FFE6F1"
        imageName="heartBPM"
        name="Heart Rate"
        value={heartValue}
        levels={heartLevels}
      ></Rectangle>
    </div>
  );
};

export default ResTempHeart;
