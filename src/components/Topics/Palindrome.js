import React, {Component} from 'react'

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            isPalindrome: ''
        }
    }

    handleChange(input) {
        this.setState({
            input: input
        })
    }

    handleClick() {
        let {input, isPalindrome} = this.state

        isPalindrome = input == input.split('').reverse().join('')

        this.setState({
            isPalindrome: isPalindrome
        })
    }
    
    render() {
        return (
            <div
            className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input
                className="inputLine"
                value={this.state.input}
                onChange={e => this.handleChange(e.target.value)}></input>
            <button
                className="confirmationButton"
                onClick={() => this.handleClick()}>Check</button>
            <span
                className="resultsBox">
                {`Palindrome: ${this.state.isPalindrome}`}
            </span>
        </div>
        )
    }
}

export default Palindrome