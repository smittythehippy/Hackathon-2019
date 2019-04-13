import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FormItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor : "#f4f4f4"}}>
        <p>{ this.props.form.title }</p>
      </div>
    )
  }
}

//object of props
FormItem.propTypes = {
    form: PropTypes.object.isRequired
  }

export default FormItem
