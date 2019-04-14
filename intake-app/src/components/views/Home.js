import React, { Component } from 'react'
import FirstForm from "../layout/FirstForm"
import SecondForm from "../layout/SecondForm"

class Home extends Component {
  render() {
    return (
      <div>
        <FirstForm />
        <SecondForm />
      </div>
    )
  }
}

export default Home;
export {Home};