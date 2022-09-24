import React from "react";
import uniqid from 'uniqid';
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ExperienceInfo from "./Components/ExperienceInfo";
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      educations: [],
    }
  }

  handleClick(section) {

  };

  render() {
    return (
      <div>
        <header>
          <h1>React CV Builder</h1>
        </header>
        <GeneralInfo />
        <EducationInfo />
        <div>
          <button onClick={this.handleClick('education')}></button>
        </div>
        <ExperienceInfo />
      </div>

    );
  }
}

export default App;
