import React from 'react';

function UserDetails(props) {
	const { companyName, position, from, to, tasks, handleClick } = props;
	return (
		<div className='userDetails'>
			<p><strong>Company Name:</strong> {companyName}</p>
			<p><strong>Position:</strong> {position}</p>
			<button onClick={handleClick} className="editbtn">✏️</button>
			<p><strong>from:</strong> {from}</p>
			<p><strong>to:</strong> {to}</p>
			<p><strong>Tasks:</strong> {tasks}</p>
		</div>
	);
}

class ExperienceInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: true,
      companyName: '',
      position: '',
      from: '',
      to: '',
      tasks: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {editMode: !prevState.editMode};
    })
  }

  render() {
    const { editMode, companyName, position, from, to, tasks } = this.state;
    const { id, handleDelete } = this.props;

		if (!editMode) {
			return (
				<UserDetails
					companyName={companyName}
					position={position}
					from={from}
					to={to}
					tasks={tasks}
					handleEdit={this.handleSubmit}
				/>
			);
		}

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='companyName'>Company Name:</label>
          <input type='text' placeholder='Tojo Clan' name='companyName' id='companyName' onChange={this.handleChange} value={companyName} />

          <label htmlFor='position'>Position:</label>
          <input type='text' placeholder='Chairman' name='position' id='position' onChange={this.handleChange} value={position} />

          <label htmlFor='from'>From:</label>
          <input type='date' name='from' id='from' onChange={this.handleChange} value={from} />

          <label htmlFor='to'>To:</label>
          <input type='date' name='to' id='to' onChange={this.handleChange} value={to} />

          <label htmlFor='tasks'>Tasks:</label>
          <textarea placeholder='Make sure every runs smoothly' name='tasks' id='tasks' onChange={this.handleChange} value={tasks} />
          <button type='submit'>Save</button>
          <button type='submit'>Save</button> <button type='button' onClick={() => handleDelete('works', id)}> Delete </button>
        </form>

      </section>
    )
  }
}

export default ExperienceInfo;
