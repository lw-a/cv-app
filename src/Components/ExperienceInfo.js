import React from 'react';

class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companyName: '',
      position: '',
      from: '',
      to: '',
      tasks: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <input type='text' placeholder='Company Name' name='companyName' onChange={this.handleChange} value={this.state.companyName} />

        <input type='text' placeholder='Position' name='position' onChange={this.handleChange} value={this.state.position} />

        <input type='date' name='from' onChange={this.handleChange} value={this.state.from} />

        <input type='date' name='to' onChange={this.handleChange} value={this.state.to} />

        <textarea id='tasks' placeholder='Job Tasks' name='tasks' onChange={this.handleChange} value={this.state.tasks} />

      </div>
    )
  }
}

export default ExperienceInfo;
