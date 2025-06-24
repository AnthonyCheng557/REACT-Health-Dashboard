import React from "react";
import Navbar from "./navbar/Navbar";
import FetchGet from "./FetchGet";


const App: React.FC = () => {
  return (
    <div>
      {/*Navbar*/}
      <Navbar title="jp" />

      {/*Body*/}
      <FetchGet /> {/*Fetch get is the out body, left will be patientsListGrp*/}
    </div>
  );
};

export default App;
