import React from 'react'
import SignIn from './SignIn'

function ParentComponent() {

    const buttonClick = (value) => {
        console.log('Welcome '+value)
        
    }
  return (
    <div>
        <SignIn onbuttonClick={buttonClick}/>
    </div>
  )
}

export default ParentComponent