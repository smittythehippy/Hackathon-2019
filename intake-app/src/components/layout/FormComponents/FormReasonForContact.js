import React, { Component } from 'react'

class FormReasonForContact extends Component{

  constructor(props){
    super(props);
    this.state = {
        noteToVolunteer: '',
        isReported: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
}
  handleInputChange(event){
    const target = event.target;
    if (target.checked == true){
      var note = 'You must take detailed notes for report of any child abuse!';
      var isChecked = true;
    }
    else{
      var note = '';
      var isChecked = false;
    }
    this.setState({  
        noteToVolunteer: note,
        isReported : isChecked
    });
  }

  render(){
    return(
        <div>
          <h4>Reason for contact</h4>
          <h6>Mark all that apply</h6>
          <div classname="m-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                  General Information (NOT a request for shelter)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="test"
                      id="defaultCheck2" name="isReported"
                      checked = {this.state.isReported} onChange={this.handleInputChange}/>
                <label class="form-check-label" for="defaultCheck2">
                  Report of child abuse/neglect
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
            <div class="input-group col-md-8 mt-2 ml-n2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="radio" name = "exampleRadios" 
                                id = "radio_caller4"/>
                      </div>
                    </div>
                      <input type="text" class="form-control" placeholder="Other"/>
            </div>
            <div className="mt-3">
              <h5>{this.state.noteToVolunteer}</h5>
            </div>
        </div>
    )
  }
}

export default FormReasonForContact