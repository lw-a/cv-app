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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(section) {
    if (section === 'education') {
      this.setState((prevState) => {
        return {
          educations: [...prevState.educations,
          <EducationInfo key={uniqid()} />]
        }
      })
    }

  };

  render() {
    return (
      <div>
        <header>
          <h1>React CV Builder</h1>
        </header>
        <GeneralInfo />
        {/* <EducationInfo /> */}
        <div>
          <h2>Education</h2>
          {this.state.educations}
          <button onClick={() => this.handleClick('education')}>Add</button>
        </div>
        <ExperienceInfo />
      </div>

    );
  }
}

export default App;
