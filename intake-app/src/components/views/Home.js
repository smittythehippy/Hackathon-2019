import React, { Component } from 'react'
import IntakeForm from "../layout/IntakeForm"


class Home extends Component {

  render() {

    return (
      <div>
        <IntakeForm />
      </div>
    )
  }
}

//render(<Home />, document.getElementById('home'));

export default Home;
// export {Home};