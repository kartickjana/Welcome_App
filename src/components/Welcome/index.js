// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLogin: false}
  onSubscribe = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }
  getButtonText = () => {
    const {isLogin} = this.state

    return isLogin ? 'Subscribed' : 'Subscribe'
  }
  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bgContainer">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you Happy Learning</p>
        <div>
          <button type="button" className="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
