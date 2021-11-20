import React from 'react'

const ApproveCard = (props) => {
  const click = () => {
    alert('hi u click the button')
  }
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button' onClick={() => click()}>
            Approve
          </div>
          <div className='ui basic red button' on onClick={() => click()}>
            Reject
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApproveCard
