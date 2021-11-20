// Import the React and ReactDOM libraries
import React from 'react'
import './style.css'
import faker from 'faker'
import Comment_Section from './Comment_Section.js'
import ApproveCard from './ApproveCard'
import APP1 from './components/APP1'
import 'semantic-ui-css/semantic.min.css'

// const button1 = () => {
//   return 'Click on me!'
// }

const getTime = () => {
  return new Date().toLocaleTimeString()
}
const style = { backgroundColor: 'blue', color: 'white' }
const button2 = { text: 'click Me' }
// Create a react component
const Comments_With_Cards = () => {
  ;<APP1 />
  return (
    <>
      <div className='root-div'>
        <label className='label' htmlFor='name'>
          Enter name:
        </label>
        <input id='name' type='text' />
        <button style={style}>{button2.text}</button>
        <div>GET TIME</div>
        <h2>{getTime()}</h2>
      </div>
      <hr style={style}></hr>
      <div className='ui container comments'>
        <ApproveCard>
          <div>
            <h4>Warning!</h4>
            Are u sure!!!
          </div>
        </ApproveCard>
        NPM START
        <ApproveCard>
          <Comment_Section
            author='name-1'
            comment='Some Comment in Here!'
            image={faker.image.avatar()}
          />
        </ApproveCard>
        <ApproveCard>
          <Comment_Section
            author='name-2'
            comment='Some Comment in Here!'
            image={faker.image.avatar()}
          />
        </ApproveCard>
        <ApproveCard>
          <Comment_Section
            author='name-3'
            comment='Some Comment in Here!'
            image={faker.image.avatar()}
          />
        </ApproveCard>
        <hr style={style}></hr>
      </div>
    </>
  )
}

export default Comments_With_Cards
