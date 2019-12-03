import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unfiltered: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
            ],
            input: "",
            filtered: []
        }
    }

    handleChange(input) {
        this.setState({
            input: input
        })
    }

    handleClick() {
        let {input, unfiltered, filtered} = this.state

        filtered = unfiltered.filter(v => v[input])

        this.setState({
            filtered: filtered
        })
    }

    render() {
        return (
            <div
                className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span
                    className="puzzleText">
                        {`Original: ${JSON.stringify(this.state.unfiltered)}`}
                    </span>
                <input
                    className="inputLine"
                    onChange={(e) => this.handleChange(e.target.value)}
                    value={this.state.input}></input>
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick()}>Filter</button>
                <span
                    className="resultsBox filterObjectRB">
                        {`Filtered: ${JSON.stringify(this.state.filtered)}`}
                    </span>
            </div>
        )
    }
}

export default FilterObject