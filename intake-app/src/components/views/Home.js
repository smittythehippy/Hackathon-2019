import React, { Component } from 'react'
import FirstForm from "../layout/FirstForm"
import SecondForm from "../layout/SecondForm"
import Referrals from '../layout/Referrals';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      caller_name: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
    this.setState({caller_name: event.target.caller_name})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Staff Name</label>
              <input type="text" className="form-control" id="inputStaff" placeholder="Staff Name" value={this.state.value} onChange={this.handleInputChange} />
          </div>
          <div className="form-group col-md-6">
              <label>Caller's Name</label>
              <input type="text" className="form-control" id="inputCaller" placeholder="Caller's Name"  name="caller_name" 
              value={this.state.caller_name} onChange={this.handleInputChange}/>
          </div>
      </div>
      <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
              </select>
          </div>
          <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
          </div>
      </div>
      <button type="submit" value = "submit" className="btn btn-primary">Sign in</button>
  </form>
  <SecondForm />
  <Referrals />
  </div>
      // <div>
      //   <FirstForm />
      //   <SecondForm />
      //   <Referrals />
      // </div>
    )
  }
}

export default Home;
export {Home};