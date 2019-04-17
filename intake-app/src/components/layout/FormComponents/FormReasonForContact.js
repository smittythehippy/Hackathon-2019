import React, { Component } from 'react'

class FormReasonForContact extends Component{

  render(){
    return(
        <div>
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
                  Report of child abuse/neglect (TODO: HANDLE INTAKE OF NOTES popup to the right or enable)
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
        </div>
    )
  }
}

export default FormReasonForContact