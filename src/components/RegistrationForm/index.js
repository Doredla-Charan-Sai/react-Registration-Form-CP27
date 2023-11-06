// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFname: false,
    showLname: false,
    onSuccess: false,
  }

  onTypeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onTypeSecond = event => {
    this.setState({lastName: event.target.value})
  }

  reset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      showFname: false,
      showLname: false,
      onSuccess: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      if (lastName === '') {
        this.setState({showLname: true, showFname: true})
      } else {
        this.setState({showFname: true})
      }
    } else if (lastName === '') {
      this.setState({showLname: true})
    } else {
      this.setState({onSuccess: true})
    }
  }

  blurFname = () => {
    const {firstName} = this.state

    this.setState({showFname: !(firstName !== '')})
  }

  blurLname = () => {
    const {lastName} = this.state

    this.setState({showLname: !(lastName !== '')})
  }

  render() {
    const {firstName, lastName, showLname, showFname, onSuccess} = this.state
    return (
      <div className="bg-cont">
        <h1 className="main-head">Registration</h1>
        {onSuccess === false ? (
          <form onSubmit={this.onSubmitForm} className="form">
            <label htmlFor="fname" className="label">
              FIRST NAME
            </label>
            <input
              type="text"
              id="fname"
              className={showFname ? 'input red-color' : 'input'}
              placeholder="First name"
              value={firstName}
              onChange={this.onTypeFirst}
              onBlur={this.blurFname}
            />
            {showFname && <p className="required">Required</p>}
            <label htmlFor="lname" className="label">
              LAST NAME
            </label>
            <input
              type="text"
              id="lname"
              className={showFname ? 'input red-color' : 'input'}
              placeholder="Last name"
              value={lastName}
              onChange={this.onTypeSecond}
              onBlur={this.blurLname}
            />
            {showLname && <p className="required">Required</p>}
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="form success">
            <img
              className="success-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="success-msg">Submitted Successfully</p>
            <button type="button" className="submit" onClick={this.reset}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
