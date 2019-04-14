import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, Radio } from 'react-radio-group';
import { db } from '../../backend/Firebase'

class IntakeForm extends Component {

    state = {
        date_of_file: null, 
        staff_name: null,
        caller_name: null,
        caller_role: null,
        youth_name: null,
        youth_age: 0,
        youth_dob: null,
        caller_phone: null,
        youth_phone: null,
        guardian_phone: null,
        do_not_shelter_check: false,
        reason_for_shelter: null, 
        behavior_questionaire: null, 
        cws_worker_name: null, 
        contact_parent_questionaire: null, 
        appointment_time: null, 
        no_sheltered_reason: null
    }

    onSubmitHandler = () =>{
        db.collection('form').doc().set({
            date_of_file: this.state.date_of_file, 
            staff_name: this.state.staff_name, 
            caller_name: this.state.caller_name,
            caller_role: this.state.caller_role,  
            youth_name: this.state.youth_name, 
            youth_age: this.state.youth_age, 
            youth_dob: this.state.youth_dob, 
            caller_phone: this.state.caller_phone, 
            youth_phone: this.state.youth_phone,
            guardian_phone: this.state.guardian_phone,
            do_not_shelter_check: this.state.do_not_shelter_check, 
            reason_for_shelter : this.state.reason_for_shelter,
            behavior_questionaire : this.state.behavior_questionaire, 
            cws_worker_name : this.state.cws_worker_name, 
            contact_parent_questionaire : this.state.contact_parent_questionaire, 
            appointment_time : this.state.appointment_time, 
            no_sheltered_reason : this.state.no_sheltered_reason
        })
        .then(() => {
            //this.props.history.push('/referrals');
        })
            .then(() => {
                //this.props.history.push('/referrals');
            })
    }

    render() {

        return (
            <div>
                <h2 align="center">Basic Info</h2>
                <hr />
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputStaff">Staff Name</label>
                        <input type="text" className="form-control" id="inputStaff" placeholder="Staff Name"
                        onChange={(event) => {
                            this.setState({...this.state, staff_name: event.target.value});
                        }}  />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Caller's Name</label>
                        <input type="text" className="form-control" id="inputCaller" placeholder="Caller's Name" 
                        onChange={(event) => {
                            this.setState({...this.state, caller_name: event.target.value});
                        }} />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Youth's Name</label>
                        <input type="text" className="form-control" id="inputYouth" placeholder="Youth's Name" 
                        onChange={(event) => {
                            this.setState({...this.state, youth_name: event.target.value});
                        }} />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Youth's Date Of Birth</label>
                        <input type="text" className="form-control" id="inputYouthDob" placeholder="Youth's DOB" 
                        onChange={(event) => {
                            this.setState({...this.state, youth_dob: event.target.value});
                        }} />
                    </div>
                </div>

                <div align="center">
                    <h6>Caller's Role</h6>
                    <RadioGroup
                        name="hurt_self"
                        style={{ width: 'auto' }}
                        OnChange={(event) => {
                            this.setState({...this.state, caller_role: event.target.value});
                        }} 
                         row>
                        <label>
                            <Radio value="roleYouth" />Youth
                    </label>
                        <label>
                            <Radio value="roleParent" />Parent
                    </label>
                        <label>
                            <Radio value="roleCws" />CWS
                    </label>
                        <label>
                            <Radio value="roleOther" />Other
                    </label>
                </RadioGroup>
                </div>
                <br />
                <h6 align="center">Phone Numbers</h6>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="callerPhone">Caller</label>
                        <input type="text" className="form-control" id="callerPhone" placeholder="Caller's Phone"
                        onChange={(event) => {
                            this.setState({...this.state, caller_phone: event.target.value});
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="youthPhone">Youth</label>
                        <input type="text" className="form-control" id="youthPhone" placeholder="Youth's Phone"
                        onChange={(event) => {
                            this.setState({...this.state, youth_phone: event.target.value});
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="guardianPhone">Guardian</label>
                        <input type="text" className="form-control" id="guardianPhone" placeholder="Guardian's Phone"
                        onChange={(event) => {
                            this.setState({...this.state, guardian_phone: event.target.value});
                        }} />
                    </div>
                </div>
                <hr />

                {/*Need to put Reason for Contact Here */}

                <div className="form-check">
                    <input className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1" 
                        onChange={(event) => {
                            this.setState({...this.state, do_not_shelter_check: event.target.value});
                        }}/>
                    <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                        name="not_shelter">
                        Have you checked to make sure that this youth is not on the "DO NOT SHELTER" list?
                            <a href="/DoNotShelter">Check List</a></label>
                </div>
                <br />
                <h3 align="center">Check all that apply:</h3>
                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Child Welfare Services, TAY, or Independent Living Skills Program
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck2">
                        Mental Health Systems
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck3">
                        Substance Abuse Services (Waterfront Recovery, other AOD resources
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Other System Agency (DHHS, Public Health, Dept. of Education, CalFresh, MediCal
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Domestic Violence
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Rape Crisis
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Law Enforcement / Juvenile Justice
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Rescue Mission / Free Mental
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Arcata House
                    </label>
                </div>

                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        RAVEN Project  </label>
                </div>


                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Betty Chinn
                    </label>
                </div>


                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Food For People / Food Not Bombs
                    </label>
                </div>


                <div className="form-check">
                    <input className=
                        "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className=
                        "form-check-label" htmlFor="defaultCheck1">
                        Other:  </label> <textarea row="5" col="60">
                    </textarea>
                </div>
                <input type="submit" name="submit_shelter2" align="" />
                <hr />
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Why is shelter needed? Max length is 500 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="6" cols="50"
                        maxlength="500"
                        onChange={(event) => {
                            this.setState({...this.state, reason_for_shelter: event.target.value});
                        }}>
                    </textarea>
                </div>
                <hr />
                <h3> Please Explain to caller: </h3>
                <p> The youth should be aware of basic YSB rules and policies. </p>
                <ul>
                    <li> No drug use, no violence </li>
                    <li> Outing/curfew times is caseby case, most stays are short. </li>
                    <li> We have 24-hour staff, provide food and basic necessities, and have Internet access. </li>
                    <li> We go on fun outings! </li>
                    <li> Make sure to mention that YSB is NOT a lock-down facilities, and that all stays are voluntary. </li>
                </ul>
                <hr />
                <p> IF YOU ARE SPEAKING WITH A GUARDIAN OR OTHER ADULT CALLING FOR A YOUTH, YOU SHOULD NOW INFORM THEM THAT YOU NEED
                TO SPEAK TO THE YOUTH IN ORDER TO COMPLETE THE SCREENING PROCESS</p>

                <div className="form-check">
                    Are you currently feeling like you want to hurt yourself?
                    <br />
                    <input className="form-check-input"
                        type="radio"
                        name="hurt_self"
                        id="exampleRadios1"
                        value="option1" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        Yes</label>
                    <br />

                    <input className="form-check-input"
                        type="radio"
                        name="hurt_self"
                        id="exampleRadios1"
                        value="option2" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        No</label>
                </div>

                <div className="form-check">
                    Do you ever get into fist fights or break things when upset?
                    <br />
                    <input className="form-check-input"
                        type="radio"
                        name="fight_break"
                        id="exampleRadios3"
                        value="option1" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        Yes </label>
                    <br />
                    <input className="form-check-input"
                        type="radio"
                        name="fight_break"
                        id="exampleRadios4"
                        value="option2" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        No</label>
                </div>

                <br />
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        If yes, who do you fight? What do you break? How often? Max length is 500 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        cols="50"
                        maxlength="500"
                        onChange={(event) => {
                            this.setState({...this.state, behavior_questionaire: event.target.value});
                        }}>

                    </textarea>
                </div>

                <div className="form-check">
                    Do you have a social worker through Child Welfare Services?
                    <br />
                    <input className="form-check-input"
                        type="radio"
                        name="cws_agent"
                        id="exampleRadios5"
                        value="option1" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        Yes</label>
                    <br />
                    <input className="form-check-input"
                        type="radio"
                        name="cws_agent"
                        id="exampleRadios6"
                        value="option2" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        No</label>
                </div>

                If yes, what is their name?
            <input type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Input here"
                    name="cws_agent_name"
                    onChange={(event) => {
                        this.setState({...this.state, cws_worker_name: event.target.value});
                    }} />
                <br />
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        If no, are you comfortable with us contacting your parent/guardian? Why or why not? Max length is 100 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        cols="50"
                        maxlength="100"
                        name="kombat"
                        onChange={(event) => {
                            this.setState({...this.state, contact_parent_questionaire: event.target.value});
                        }}>
                    </textarea>
                </div>

                <p> If a youth is ok with us contacting their guardian, great! If they are not it is possible that they can
                    still be sheltered, but management must be involved in the decision.Management or emergency backup should
                        also be involved if the youth has a history of violence or recent suicide attempts.</p>
                <br />
                <hr />
                <br />
                <p> Check probation status. Call the appropriate number below, identify yourself as working at YSB, and ask if
                    the youth is a ward/602. You willneed to give them the youth's full name and DOB. Youth who are wards cannot
                        be sheltered.</p>
                <br />
                <p>
                    Mon-Fri 8 am-4:30 Pm 707-445-7401<br />
                    Weekends or after 4:30 pm: 707-445-7644</p>
                <br />
                <hr />
                <br />

                <div className="form-check">
                    Once you have completed the above steps, please check one of the following:
                        <br />
                    <input className="form-check-input"
                        type="radio"
                        name="youth_attends"
                        id="exampleRadios7"
                        value="option1" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        Youth plans to come to YSB</label>
                    If yes, what is the date and time? <input type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Date and time"
                        name="date_time" 
                        onChange={(event) => {
                            this.setState({...this.state, appointment_time: event.target.value});
                        }}/>
                    <br /><hr /> <br />

                    <input className="form-check-input"
                        type="radio"
                        name="youth_attends"
                        id="exampleRadios8"
                        value="option2" />
                    <label className="form-check-label"
                        htmlFor="exampleRadios1">
                        Youth cannot be sheltered, or does not plan to seek shelter at this time.</label>
                    <label htmlFor="exampleFormControlTextarea1">
                        Reason given? Max length is 100 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        cols="50"
                        maxlength="500"
                        name="rsn_given"
                        onChange={(event) => {
                            this.setState({...this.state, no_sheltered_reason: event.target.value});
                        }}>
                    </textarea>
                </div>


                <h1 align="center"> Request for Shelter </h1>
                <ul className="list-group-item list-group-flush">
                    <h4 align="center"> If their age is between 12 and 17 </h4>
                    <li className="list-group-item"> Skip to Check "Do Not Shelter" check box</li>
                    <h4 align="center" margin-top="10px"> If their age is between 18 and 24 </h4>
                    <li className="list-group-item"> Inform them that we do not have same-day shelter for their age group,
			may qualify for transitional housing programs</li>
                    <li className="list-group-item"> Make sure to have reliable contact information and tell them someone
			will be calling them back in the next few days with more detail about these programs.</li>
                    <li className="list-group-item">Provide them with referals from the previous section.</li>
                    <h4 align="center"> If the person is over the age of 24 or under 12 </h4>
                    <li className="list-group-item">Explain we do not provide housing for their age group</li>
                    <li className="list-group-item">Provide referals from previous section as needed.</li>
                </ul>
                <br/>
                Submit request for shelter:
            <button
                    name="submit_shelter2"
                    onClick={this.onSubmitHandler}>Submit
            </button>
            Submit request other than shelter: 
            <button
                name="submit_nonshelter"
                onClick={this.onSubmitHandler}>Submit
            </button>
            </div>
        )
    }
}

export default IntakeForm
export { IntakeForm }