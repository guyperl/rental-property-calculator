import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './loginPage.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user)
  }
  render() {
    return (
      <div className='loginPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='loginForm'>
            <label htmlFor='email'>Email</label>
            <input type='text'
              name='email'
              placeholder={'Enter Email'}
              value={this.state.email}
              onChange={this.handleChange} />
            <label htmlFor='password'>Password</label>
            <input type='password'
              name='password'
              placeholder={'Enter Password'}
              value={this.state.password}
              onChange={this.handleChange} />
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage