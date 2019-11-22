import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            evens: [],
            odds: []
        }
    }

    handleUpdateInput(input) {
        this.setState({
            input: input
        })
    }

    handleClick() {
        this.sort()
    }

    sort() {
        let {input, evens, odds} = this.state

        input.split(', ').forEach(v => !(+v % 2) ? evens.push(+v) : odds.push(+v))
        this.setState({
            evens: evens,
            odds: odds
        })
    }

    render() {
        return (
            <div
                className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                    className="inputLine"
                    onChange={e => this.handleUpdateInput(e.target.value)}
                    value={this.state.input}></input>
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick()}>Split</button>
                <span
                    className='resultsBox'>
                        {`Evens: [${this.state.evens}]`}
                    </span>
                <span
                    className='resultsBox'>
                        {`Odds: [${this.state.odds}]`}
                    </span>
            </div>
        )
    }
}

export default EvenAndOdd