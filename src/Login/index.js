import Cookies from 'js-cookie'

import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMessage: '', shoeErrorMessage: ''}

  render() {
    const {username, password, errorMessage, shoeErrorMessage} = this.state

    return (
      <div className="background-container">
        <div className="login-section-container"></div>
      </div>
    )
  }
}
