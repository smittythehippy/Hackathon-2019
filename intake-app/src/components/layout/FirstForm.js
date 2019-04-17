import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FirstForm() {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Staff Name</label>
                    <input type="text" className="form-control" id="inputStaff" placeholder="Staff Name" />
                </div>
                <div className="form-group col-md-6">
                    <label>Caller's Name</label>
                    <input type="text" className="form-control" id="inputCaller" placeholder="Caller's Name"  name="caller_name" />
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
            {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
        </form>
    );
}
