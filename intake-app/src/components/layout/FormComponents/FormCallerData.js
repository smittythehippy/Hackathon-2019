import React, { Component } from 'react'

class FormCallerData extends Component {

  render() {
    return(
      
          <div className="form-group col-md-5 border border-primary rounded p-3">
          <h4>Caller</h4>
              <div className="form-group col-md-12">
                <input type="text" className="form-control" 
                        id="inputCallerName" placeholder="Name"  
                        name="caller_name" />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone1" placeholder="Phone"
                      name="caller_phone1" />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone2" placeholder="Secondary phone"
                      name="caller_phone2"  />
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
      )
  }
}

export default FormCallerData