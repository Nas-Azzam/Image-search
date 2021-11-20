import React, { Component } from 'react'
import {} from 'semantic-ui-react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

export class WeatherChecker extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     lat: null,
  //     errorMessage: '',
  //   }
  // }
  state = { alt: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  componentDidUpdate() {}

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          ERROR:
          {this.state.errorMessage}
        </div>
      )
    }
    if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />
    return (
      <div>
        {/* PROSP put it in spinner tag message='Please Allow the location request! ' */}
        <Spinner message='Please Allow the location request! ' />
      </div>
    )
  }

  render() {
    return <div className='massive border red'>{this.renderContent()}</div>
  }
}

export default WeatherChecker
