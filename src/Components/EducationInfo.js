import React from 'react';

function UserDetails(props) {
	const { school, type, from, to, handleClick } = props;
	return (
		<div className='userDetails'>
			<p><strong>School Name:</strong> {school}</p>
			<p><strong>Type of Study:</strong> {type}</p>
			<button onClick={handleClick} className="editbtn">✏️</button>
			<p><strong>from:</strong> {from}</p>
			<p><strong>to:</strong> {to}</p>
      <br></br>
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
    const { id, handleDelete } = this.props;

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
      <section>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='school'>School Name:</label>
          <input type='text' placeholder='Sunflower Academy' name='school' id='school' onChange={this.handleChange} value={school} />

          <label htmlFor='type'>Type of Study:</label>
          <input type='text' placeholder='Dragon Style' name='type' id='type' onChange={this.handleChange} value={type} />

          <label htmlFor='from'>From:</label>
          <input type='date' name='from' id='from' onChange={this.handleChange} value={from} />

          <label htmlFor='to'>To:</label>
          <input type='date' name='to' id='to' onChange={this.handleChange} value={to} />
          <button type='submit'>Save</button> <button type='button' onClick={() => handleDelete('educations', id)}> Delete </button>
        </form>
      </section>
    )
  }
}

export default EducationInfo;
