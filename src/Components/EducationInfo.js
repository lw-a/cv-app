import React from 'react';

class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      type: '',
      from: '',
      to: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name, value } = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
      <h2>Education</h2>
      <input type='text' placeholder='School Name' name='school' onChange={this.handleChange} value={this.state.school} />

      <input type='text' placeholder='Type of Study' name='type' onChange={this.handleChange} value={this.state.type} />

      <input type='date' name='from' onChange={this.handleChange} value={this.state.from} />

      <input type='date' name='to' onChange={this.handleChange} value={this.state.to} />
      </div>
    )
  }
}

export default EducationInfo;
