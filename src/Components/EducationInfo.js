import React from 'react';

function UserDetails(props) {
	const { school, type, from, to, handleClick } = props;
	return (
		<div>
			<p><strong>School Name:</strong> {school}</p>
			<p><strong>Type of Study:</strong> {type}</p>
			<p><strong>from:</strong> {from}</p>
			<p><strong>to:</strong> {to}</p>
			<button onClick={handleClick}>Edit</button>
		</div>
	);
}

class EducationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      school: '',
      type: '',
      from: '',
      to: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {editMode: !prevState.editMode}
    });
  }

  render() {
    const { editMode, school, type, from, to } = this.state;

		if (!editMode) {
			return (
				<UserDetails
					school={school}
					type={type}
					from={from}
					to={to}
					handleClick={this.handleSubmit}
				/>
			);
		}
    return (
      <div>
        <h2>Education</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='School Name' name='school' onChange={this.handleChange} value={school} />

          <input type='text' placeholder='Type of Study' name='type' onChange={this.handleChange} value={type} />

          <input type='date' name='from' onChange={this.handleChange} value={from} />

          <input type='date' name='to' onChange={this.handleChange} value={to} />
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

export default EducationInfo;
