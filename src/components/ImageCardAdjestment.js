import React, { Component } from 'react'

class ImageCardAdjestment extends Component {
  constructor(props) {
    super(props)
    // Ref system is used in order to access a particular tag (or tag attributes)
    this.imageRef = React.createRef()
    // initialize state
    this.state = { spans: 0 }
  }
  // call back for height on image load
  componentDidMount() {
    // console.log(this.imageRef)
    // console.log(this.imageRef.current)
    // console.log(this.imageRef.current.imageHeight)
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    // image height property
    const height = this.imageRef.current.clientHeight
    // divide span by css grid-auto-rows: 170px (change to 10)
    const spans = Math.ceil(height / 10)
    // change state
    this.setState({ spans })
  }
  render() {
    return (
      // intialize style
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    )
  }
}
export default ImageCardAdjestment
