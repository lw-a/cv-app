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
      educations: [<EducationInfo key={uniqid()} />],
      works: [<ExperienceInfo key={uniqid()} />]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(section) {
    if (section === 'education') {
      this.setState((prevState) => {
        return {
          educations: [...prevState.educations,
          <EducationInfo key={uniqid()} />]
        }
      })
    } else if (section === 'work') {
      this.setState((prevState) => {
        return {
          works: [...prevState.works,
          <ExperienceInfo key={uniqid()} />]
        }
      })
    }
  };

  handleDelete(section, id) {
		this.setState((prevState) => {
			let updatedList = prevState[section].filter((key) => key !== id);
			return {
				[section]: updatedList,
			};
		});
  }

  render() {
    const educationExp = this.state.educations.map((id) => (
			<EducationInfo key={id} id={id} handleDelete={this.handleDelete} />
		));
		const workExp = this.state.works.map((id) => (
			<ExperienceInfo key={id} id={id} handleDelete={this.handleDelete} />
		));

    return (
      <div>
        <header>
          <h1>React CV</h1>
        </header>
        <main>
          <div>
          <h2>General Information</h2>
            <GeneralInfo />
          </div>
          <div className="sectionDiv">
            <h2>Education Experience</h2>
            {educationExp}
            <button onClick={() => this.handleClick('education')} className='btn addbtn'>Add</button>
          </div>
          <div className="sectionDiv">
          <h2>Work Experience</h2>
            {workExp}
            <button onClick={() => this.handleClick('work')} className='btn addbtn'>Add</button>
          </div>
        </main>
      </div>

    );
  }
}

export default App;
