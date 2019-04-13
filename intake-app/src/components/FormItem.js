import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FormItem extends Component {
  getStyle = () => {
    return {
        textDecoration: this.props.form.completed ?
        "line-through" : "none",
        backgroundColor: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotted"
    }    
  }

  markComplete = (e) => {
      console.log(this.props);

  }
    render() {
        const{id, title} = this.props.form;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> { ' ' }
        { title }
        <button onClick={this.props.delForm.bind(this, id)} style={btnStyle}>x</button></p>
      </div>
    )
  }
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: "pointer",
    float: "right"
}

//object of props
FormItem.propTypes = {
    form: PropTypes.object.isRequired
  }


export default FormItem
