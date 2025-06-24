import styles from "./FetchGet.module.css";
import PatientsListGrp from "./main-body/left-section/PatientsListGrp";
import BloodPressureLineChart from "./main-body/middle-section/BloodPressureLineChart";
import DiagnosticList from "./main-body/middle-section/DiagnosticList";
import ResTempHeart from "./main-body/middle-section/ResTempHeart";
import PatientsProfile from "./main-body/right-section/PatientsProfile";
import LabResults from "./main-body/right-section/LabResults";

import { useEffect, useState } from "react";
import MyComponent from "./test";

type Patient = [string, string, number];
type Problem = [string, string, string];
type PatientsInfo = [string, string, string, string, string, string];

const FetchGet = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [patientsList, setPatientsList] = useState<Patient[]>([]);
  const [dateList, setDateList] = useState<string[]>([]);
  const [systolicList, setSystolicList] = useState<number[]>([]);
  const [diastolicList, setDiastolicList] = useState<number[]>([]);
  const [currDiastolicValue, setCurrDiastolicValue] = useState<number>(0);
  const [currSystolicValue, setCurrSystolicValue] = useState<number>(0);
  const [currDiastolicLevels, setCurrDiastolicLevels] = useState<string>("");
  const [currSystolicLevels, setCurrSystolicLevels] = useState<string>("");

  const [resValue, setResValue] = useState<number>(0);
  const [tempValue, setTempValue] = useState<number>(0);
  const [heartValue, setHeartValue] = useState<number>(0);

  const [resLevels, setResLevels] = useState<string>("");
  const [tempLevels, setTempLevels] = useState<string>("");
  const [heartLevels, setHeartLevels] = useState<string>("");

  const [diagnosticList, setDiagnosticList] = useState<Problem[]>([]);

  const [patientsInfo, setPatientsInfo] = useState<PatientsInfo[]>([]);

  const [labResults, setLabResults] = useState<string[]>([]);

  /* testing */
  const [selectedPatient, setSelectedPatient] = useState<string>("");

  //first use effect to fetch the data
  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_URL;
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;

    const auth = btoa(`${username}:${password}`);

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL, {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network error");
        }

        const result = await response.json();

        // PatientsListGrp (Left Block)
        const patientsList: Patient[] = result.map((person: any) => [
          person.name,
          person.gender,
          person.age,
        ]);
        setPatientsList(patientsList);

        // set the data after fetching
        setData(result);

      } catch (error: any) {
        setError(error.message); // catch if error
      } finally {
        setIsLoading(false); // stop loading
      }
    };

    fetchData();
  }, []);

  //second sue effect
  useEffect(() => {
    if (!data || !selectedPatient) return; 

    const foundPatient = data.find(
      (person: { name: string }) => person.name === selectedPatient
    );

    if (foundPatient) {
      const diagnosis_history = foundPatient.diagnosis_history;
      const diagnostic_list = foundPatient.diagnostic_list;
      const lab_results = foundPatient.lab_results;

      //update diagnosis chart and levels
      const dateList = diagnosis_history.map((item: any) => {
        const month = item.month.substring(0, 3);
        const month_year = month + "," + item.year;
        return month_year;
      });
      setDateList(dateList);

      const systolicList = diagnosis_history.map((item: any) => {
        return item.blood_pressure.systolic.value;
      });
      setSystolicList(systolicList);

      const diastolicList = diagnosis_history.map((item: any) => {
        return item.blood_pressure.diastolic.value;
      });
      setDiastolicList(diastolicList);

      setCurrSystolicValue(diagnosis_history[0].blood_pressure.systolic.value);
      setCurrSystolicLevels(diagnosis_history[0].blood_pressure.systolic.levels);
      setCurrDiastolicValue(diagnosis_history[0].blood_pressure.diastolic.value);
      setCurrDiastolicLevels(diagnosis_history[0].blood_pressure.diastolic.levels);

      //set res, temp, heart values
      setResValue(diagnosis_history[0].respiratory_rate.value);
      setTempValue(diagnosis_history[0].temperature.value);
      setHeartValue(diagnosis_history[0].heart_rate.value);

      setResLevels(diagnosis_history[0].respiratory_rate.levels);
      setTempLevels(diagnosis_history[0].temperature.levels);
      setHeartLevels(diagnosis_history[0].heart_rate.levels);

      //set diagnostic list
      const diagnosticList: Problem[] = diagnostic_list.map((item: any) => [
        item.name,
        item.description,
        item.status,
      ]);
      setDiagnosticList(diagnosticList);

      //set patient profile data
      const patientsInfo = new Array(6).fill(null);
      patientsInfo[0] = foundPatient.profile_picture;
      patientsInfo[1] = foundPatient.name;
      patientsInfo[2] = foundPatient.date_of_birth;
      patientsInfo[3] = foundPatient.gender;
      patientsInfo[4] = foundPatient.phone_number;
      patientsInfo[5] = foundPatient.emergency_contact;
      patientsInfo[6] = foundPatient.insurance_type;
      setPatientsInfo(patientsInfo);

      //set lab results
      const labResults = lab_results.map((item: any) => {
        return item;
      });
      setLabResults(labResults);
    }
  }, [data, selectedPatient]); //dependent on selectedPatient

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainBody}>
      {/* Left side */}
      <PatientsListGrp
        patients_info={patientsList}
        onPatientSelect={(name: string) => {
          setSelectedPatient(name); 
        }}
      />

      {/* Middle */}
      <div className={styles.middleContainers}>
        <div className={styles.diagnosisHistory}>
          <h2 className={styles.heading}>Diagnosis History</h2>
          <div className={styles.lineChartRTHContainer}>
            <BloodPressureLineChart
              dateList={dateList.slice(0, 6).reverse()}
              systolicList={systolicList.slice(0, 6).reverse()}
              diastolicList={diastolicList.slice(0, 6).reverse()}
              systolicValue={currSystolicValue}
              systolicLevels={currSystolicLevels}
              diastolicValue={currDiastolicValue}
              diastolicLevels={currDiastolicLevels}
            />
            <ResTempHeart
              resValue={resValue}
              tempValue={tempValue}
              heartValue={heartValue}
              resLevels={resLevels}
              tempLevels={tempLevels}
              heartLevels={heartLevels}
            />
          </div>
        </div>
      </div>

      <DiagnosticList diagnosticList={diagnosticList} />
      <PatientsProfile patientsInfo={patientsInfo} />
      <LabResults labResults={labResults} />

    </div>
  );
};

export default FetchGet;
