import React, { useState } from 'react'
// import { Component } from 'react'

const SearchBar = ({ handleFormSubmit }) => {

    // To make the video fetching logic below reusable, we'll use a custom hook instead
    const [term, setTerm] = useState('');

    // One line function so we use an inline function instead (see below)
    /*
    const handleInputChange = (event) => {
        setTerm(event.target.value)
    }
    */

    const onFormSubmit = (event) => {
        // We make sure the browser doesn't automatically attempt to submit the form anytime the user actually submits it
        event.preventDefault()

        // We tell the parent component (App) what the current search term is and trigger the call-back it contains (handleFormSubmit)
        handleFormSubmit(term)
    }

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label>Video Search</label>
                    <input
                        type='text'
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    ></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar

/*
export default class SearchBar extends Component {

    state = { term: '' }

    handleInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    handleFormSubmit = (event) => {
        // We make sure the browser doesn't automatically attempt to submit the form anytime the user actually submits it
        event.preventDefault();

        // We tell the parent component (App) what the current search term is and trigger the call-back it contains (handleFormSubmit)
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.handleFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
*/
