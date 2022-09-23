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

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  render() {
    return(
      <h2>General Info</h2>
    )
  }
}

export default GeneralInfo;
