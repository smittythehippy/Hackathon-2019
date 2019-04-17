import React, { Component } from 'react'
//import FirstForm from "../layout/FirstForm"
import SecondForm from "../layout/SecondForm"
import Referrals from '../layout/Referrals';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});

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
          <div className="form-group col-md-5 border border-primary rounded p-3">
          <h4>Caller</h4>
              <div className="form-group col-md-12">
                <input type="text" className="form-control" 
                        id="inputCallerName" placeholder="Name"  
                        name="caller_name" />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone" placeholder="Phone"
                      name="caller_phone" 
                      value={this.state.value} onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone2" placeholder="Secondary phone"
                      name="caller_phone" 
                      value={this.state.value} onChange={this.handleInputChange} />
              </div>
              <h5>Caller's role</h5>
              <div class="form-check ml-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radio_caller1" value="option1"/>
                    <label class="form-check-label" for="radio_caller1">
                      Youth
                    </label>
              </div>
              <div class="form-check ml-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radio_caller2" value="option2"/>
                    <label class="form-check-label" for="radio_caller2" >
                      Parent
                    </label>
              </div>
              <div class="form-check ml-4 mb-2">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radio_caller3" value="option3"/>
                    <label class="form-check-label" for="radio_caller3" >
                      Child Welfare Services (CWS)
                    </label>
              </div>
              <div class="input-group col-md-10 ml-n2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="radio" name = "exampleRadios" 
                            id = "radio_caller4"/>
                  </div>
                </div>
                
                  <input type="text" class="form-control" placeholder="Other"/>
              </div>
        </div>
        <div className="ml-3 col-md-5 form-group border border-primary rounded p-3">
          <h4>Youth</h4>
              <div className="form-group col-md-12">
                <input type="text" className="form-control" 
                        id="inputCallerName" placeholder="Name"  
                        name="caller_name" />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone" placeholder="Phone"
                      name="caller_phone" 
                      value={this.state.value} onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone2" placeholder="Secondary phone"
                      name="caller_phone" 
                      value={this.state.value} onChange={this.handleInputChange} />
              </div>
              <div class="form-group col-md-5">
                <label for="exampleFormControlSelect2"><h5>Age</h5></label>
                  <select class="form-control" id="exampleFormControlSelect2">
                  <option value="" disabled selected hidden>Required...</option>
                    <option>11 or Younger</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25 or Older</option>
                  </select>
              </div>
        </div>
      </div>
      <div className="form-row">
        <div className="p-3 col-md-5 form-group border border-primary rounded">
          <h4>Reason for contact</h4>
          <div classname="m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                  General Information (NOT a request for shelter)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label class="form-check-label" for="defaultCheck2">
                  Report of child abuse/neglect (TODO: HANDLE INTAKE OF NOTES popup to the right or enables a textarea)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label class="form-check-label" for="defaultCheck2">
                  Request for resources other than shelter (REFERRALS section 2)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label class="form-check-label" for="defaultCheck2">
                  Request for shelter (Age check and options for ages - section 3)
                </label>
              </div>
            </div>
            <div class="input-group col-md-6 mt-2 ml-n2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="radio" name = "exampleRadios" 
                                id = "radio_caller4"/>
                      </div>
                    </div>
                      <input type="text" class="form-control" placeholder="Other"/>
            </div>
        </div>
          <div className="ml-3 col-md-5 form-group border border-primary rounded" disabled> 
            <div class="form-group m-2">
              <label for="exampleFormControlTextarea1">Take detailed notes!</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
      </div>
      </form>
      {/* <hr></hr>
      <br></br>
  <SecondForm />
  <Referrals /> */}
      </div>
    )
  }
}

export default Home;
export {Home};