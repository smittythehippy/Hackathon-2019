import React, { Component } from 'react'
class FormYouthData extends Component {

    render(){

        return(

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
                       />
              </div>
              <div className="form-group col-md-12">
                <input type="phone" className="form-control" 
                      id="inputCallerPhone2" placeholder="Secondary phone"
                      name="caller_phone" 
                       />
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
        )
    }
}
export default FormYouthData