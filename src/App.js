import React from 'react'
import UnsplashApi from './API/UnsplashApi'
import Image_list from './components/Image_list.js'
import SearchBar from './components/SearchBar'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.onSearchSubmit = this.onSearchSubmit.bind(this)
  // }
  state = { images: [] }

  onSearchSubmit = async (Search_input) => {
    const response = await UnsplashApi.get('/search/photos', {
      params: { query: Search_input },
    })
    // also can use async
    // .then((response) => {
    //   console.log(response.data.results)
    // console.log(response.data.results)
    // })
    // console.log(this)
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={(e) => this.onSearchSubmit(e)} />
        {/* Found:{this.state.images.length} images */}
        <Image_list images={this.state.images} />
      </div>
    )
  }
}

export default App
