import React, { Component } from 'react';
import FormItem from './FormItem'
import PropTypes from 'prop-types';
//THIS is a component!
class Forms extends Component {
  //render is a lifecyle method, only one that is required
  //returns JSX, an easy way to write js for output in browser
  render() {
    return this.props.forms.map((form) => (
      <FormItem key={form.id} form={form}/>
     )
    );
  }
}

//Object of props
Forms.propTypes = {
  forms: PropTypes.array.isRequired
}

//className instead of class like normal css
export default Forms;
