import React from "react";
import uniqid from 'uniqid';
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import './styles/App.css';

function App() {
  return (
    <div>
      <header>
        <h1>React CV Builder</h1>
      </header>
      <GeneralInfo />
      <EducationInfo />
      <ExperienceInfo />
    </div>

  );
}

export default App;
