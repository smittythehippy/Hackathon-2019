import React from 'react'
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class Referrals extends React.Component {

render(){
     return (
        <form align-items="left">
            {/* <h3>Check all that apply:</h3> */}
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


            <div className="form-check mt-2">
                <input className=
                    "form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className=
                    "form-check-label" htmlFor="defaultCheck1">
                    Other:  </label> <textarea row="5" col="120">
                </textarea>
            </div>
            {/* <input type="submit" name="submit_shelter2" align=""/> */}
        </form>
    );
  }
}

export default Referrals