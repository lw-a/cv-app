import React from 'react';

function UserDetails(props) {
	const { firstName, lastName, email, phone, handleClick } = props;
	return (
		<div className='userDetails'>
			<p><strong>First Name:</strong> {firstName}</p>
			<p><strong>Last Name:</strong> {lastName}</p>
			<button onClick={handleClick} className="editbtn">✏️</button>
			<p><strong>Email:</strong> {email}</p>
			<p><strong>Phone:</strong> {phone}</p>
		</div>
	);
}

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

	handleSubmit(e) {
		e.preventDefault();
		this.setState((prevState) => {
			return { editMode: !prevState.editMode };
		});
	}

  render() {
    const { editMode, firstName, lastName, email, phone } = this.state;

		if (!editMode) {
			return (
				<UserDetails
					firstName={firstName}
					lastName={lastName}
					email={email}
					phone={phone}
					handleClick={this.handleSubmit}
				/>
			);
		}

    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name:</label>
          <input type='text' placeholder='Kazuma' name='firstName' id='firstName' onChange={this.handleChange} value={firstName} />

          <label htmlFor='lastName'>Last Name:</label>
          <input type='text' placeholder='Kiryu' name='lastName' id='lastName' onChange={this.handleChange} value={lastName} />

          <label htmlFor='email'>Email Address:</label>
          <input type='text' placeholder='dragon@dojima.jp' name='email' id='email' onChange={this.handleChange} value={email} />

          <label htmlFor='phone'>Phone Number:</label>
          <input type='text' placeholder='0617196800' name='phone' id='phone' onChange={this.handleChange} value={phone} />

          <button type='submit'>Save</button>
        </form>
      </section>
    )
  }
}

export default GeneralInfo;
