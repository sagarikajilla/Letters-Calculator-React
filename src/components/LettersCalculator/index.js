// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onEnter = event => {
    const phrase = event.target.value
    this.setState({searchInput: phrase})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    return (
      <div className="bg">
        <div className="card">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="input"
              className="ip"
              onChange={this.onEnter}
              placeholder="Enter the phrase"
            />
            <p className="desc">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
