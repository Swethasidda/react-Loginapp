// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false, text: 'Please Login'}

  onStatus = () => {
    const {isLoggedIn, text} = this.state
    this.setState(() => ({isLoggedIn: !isLoggedIn}))
    if (text === 'Welcome User') {
      this.setState({text: 'Please Login'})
    } else {
      this.setState({text: 'Welcome User'})
    }
  }

  render() {
    const {isLoggedIn, text} = this.state
    return (
      <div className="big-container">
        <div className="small-container">
          <Message text={text} />
          <button
            type="button"
            className="button-container"
            onClick={this.onStatus}
          >
            {isLoggedIn ? <Login /> : <Logout />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
