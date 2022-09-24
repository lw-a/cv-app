import React from 'react';

function UserDetails(props) {
	const { companyName, position, from, to, tasks, handleClick } = props;
	return (
		<div>
			<p><strong>Company Name:</strong> {companyName}</p>
			<p><strong>Position:</strong> {position}</p>
			<p><strong>from:</strong> {from}</p>
			<p><strong>to:</strong> {to}</p>
			<p><strong>Tasks:</strong> {tasks}</p>
			<button onClick={handleClick}>Edit</button>
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Company Name' name='companyName' onChange={this.handleChange} value={companyName} />

          <input type='text' placeholder='Position' name='position' onChange={this.handleChange} value={position} />

          <input type='date' name='from' onChange={this.handleChange} value={from} />

          <input type='date' name='to' onChange={this.handleChange} value={to} />

          <textarea id='tasks' placeholder='Job Tasks' name='tasks' onChange={this.handleChange} value={tasks} />
          <button type='submit'>Save</button>
        </form>

      </div>
    )
  }
}

export default ExperienceInfo;
