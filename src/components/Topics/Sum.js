import React, {Component} from 'react'

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            left: 0,
            right: 0,
            total: null
        }
    }

    handleChangeLeft(input) {
        this.setState({
            left: +input
        })
    }

    handleChangeRight(input) {
        this.setState({
            right: +input
        })
    }

    handleClick() {
        let {left, right, total} = this.state

        total = left + right

        this.setState({
            total: total
        })
    }

    render() {
        return (
            <div
                className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    className="inputLine"
                    value={this.state.left == 0 ? '' : this.state.left}
                    onChange={e => this.handleChangeLeft(e.target.value)}></input>
                <input
                    className="inputLine"
                    value={this.state.right == 0 ? '' : this.state.right}
                    onChange={e => this.handleChangeRight(e.target.value)}></input>
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick()}>Add</button>
                <span className="resultsBox">
                    {`Sum: ${this.state.total == null ? '' : this.state.total}`}
                </span>
            </div>
        )
    }
}

export default Sum