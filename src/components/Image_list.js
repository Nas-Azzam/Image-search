import React from 'react'
import './Image_list.css'
import ImageCardAdjestment from './ImageCardAdjestment'

const Image_list = (props) => {
  // Render images with map from props
  //go to network tag in console for images properties
  const images = props.images.map((image) => {
    // root statement will have to be add key
    return <ImageCardAdjestment key={image.id} image={image} />
  })
  return <div className='image-list'>{images}</div>
}

export default Image_list

// const renderUser = user.map(({ id, name }) => {
//   return <li key={id}>{name}</li>
// // })
// return(
//   <ul>
//     {renderUser}
//   </ul>
// )
