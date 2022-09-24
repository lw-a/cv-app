import React from "react";
import uniqid from 'uniqid';
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import './styles/App.css';

class App extends React.Component {
  render() {
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
}

export default App;
