import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unfiltered: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            filtered: [],
            input: ''
        }
    }

    handleChange(input) {
        this.setState({
            input: input
        })
    }

    handleClick() {
        let {input, filtered, unfiltered} = this.state

        filtered = unfiltered.filter(v => v.includes(input))

        this.setState({
            filtered: filtered
        })
    }

    render() {
        return (
            <div
                className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span
                    className="puzzleText">
                        {`Names: ${JSON.stringify(this.state.unfiltered)}`}
                    </span>
                <input
                    className="inputLine"
                    value={this.state.input}
                    onChange={(e) => this.handleChange(e.target.value)}>
                    </input>
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick()}>Filter</button>
                <span
                    className="resultsBox filterStringRB">
                        {`Filtered Names: ${JSON.stringify(this.state.filtered)}`}
                    </span>
            </div>
        )
    }
}

export default FilterString