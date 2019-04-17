import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, Radio } from 'react-radio-group';
import { db } from '../../backend/Firebase'
import FormCallerData from './FormComponents/FormCallerData';
import FormYouthData from './FormComponents/FormYouthData';
import FormReasonForContact from './FormComponents/FormReasonForContact';
import FormReasonForContactNotes from './FormComponents/FormReasonForContactNotes';


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
            <form>
            <div className="form-row">
                <FormCallerData />
                <FormYouthData />              
            </div>
            <div className="form-row col-md-10 p-3 border border-primary rounded">
                <FormReasonForContact />
                <FormReasonForContactNotes />
            </div>
            </form>
        )
    }
}

export default IntakeForm