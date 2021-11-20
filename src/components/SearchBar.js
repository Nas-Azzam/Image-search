import React, { Component } from 'react'

class SearchBar extends Component {
  state = { Search_input: '' }

  onFormSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state.term)
    this.props.onSubmit(this.state.Search_input)
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.Search_input}
              onChange={(e) => this.setState({ Search_input: e.target.value })}
            />
            {/* <label>Enter Password</label>
            <input
              type='password'
              placeholder='Enter your Password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            {this.state.password.length < 4
              ? 'Password must be at least 4 characters'
              : ''} */}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
