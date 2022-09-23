import React from "react";
import './styles/App.css';
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";

function App() {
  return (
    <div>
      <h1>React CV Builder</h1>
      <GeneralInfo />
      <EducationInfo />
      <ExperienceInfo />
    </div>

  );
}

export default App;
