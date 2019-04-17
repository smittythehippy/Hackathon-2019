import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DoNotShelter from '../views/DoNotShelter';
import 'bootstrap/dist/css/bootstrap.min.css';

function SecondForm() {
    return (
        <div>
            <form method="post">
                <div className="form-check">
                    <input className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1" />
                    <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                        name="not_shelter">
                        Have you checked to make sure that this youth is not on the "DO NOT SHELTER" list? 
                            <a href="/DoNotShelter">Check List</a></label>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Why is shelter needed? Max length is 500 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10" cols="50"
                        maxlength="500">

                    </textarea>
                </div>
                <h3> EXPLAIN: </h3>
                <p> the youth should be aware of basic YSB rules and policies. </p>
                <ul>
                    <li> No drug use, no violence </li>
                    <li> outing/curfew times is caseby case, most stays are short. </li>
                    <li> We have 24-hour staff, provide food and basic necessities, and have Internet access. </li>
                    <li> We go on fun outings! </li>
                    <li> Make sure to mention that YSB is NOT a lock-down facilities, and that all stays are voluntary. </li>
                </ul>
                <br />
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
                        if yes, who do you fight? what do you break? How often? Max length is 500 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        cols="50"
                        maxlength="500">

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
                    name="cws_agent_name" />
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
                        name="kombat">
                    </textarea>
                </div>

                <p> if a youth is ok with us contacting their guardian, great! If they are not it is possible that they can
                    still be sheltered, but management must be involved in the decision.Management or emergency backup should
                        also be involved if the youth has a history of violence or recent suicide attempts.</p>
                <br />
                <hr />
                <br />
                <p> check probation status. Call the appropriate number below, identify yourself as working at YSB, and ask if
                    the youth is a ward/602. you willneed to give them the youth's full name and DOB. Youth who are wards cannot
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
                        name="date_time" />
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
                        reason given? Max length is 100 characters:</label>
                    <br />
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        cols="50"
                        maxlength="500"
                        name="rsn_given">

                    </textarea>
                </div>
                Submit request for shelter:
            <input type="submit"
                    name="submit_shelter2" />
            </form>
        </div>
    )
}

export default SecondForm
export { SecondForm }