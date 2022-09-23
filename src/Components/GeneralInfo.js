import React from 'react';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h2>General Info</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='First Name' name='firstName' onChange={this.handleChange} value={this.state.firstName} />

          <input type='text' placeholder='Last Name' name='lastName' onChange={this.handleChange} value={this.state.lastName} />

          <input type='text' placeholder='Email Address' name='email' onChange={this.handleChange} value={this.state.email} />

          <input type='text' placeholder='Phone Number' name='phone' onChange={this.handleChange} value={this.state.phone} />

          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default GeneralInfo;
