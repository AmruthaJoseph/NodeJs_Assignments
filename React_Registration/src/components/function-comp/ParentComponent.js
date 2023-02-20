import React from 'react'
import Registration from './Registration'


function ParentComponent() {

    const buttonClick = () => {
        console.log("Registration completed successfully")
      }

  return (
    <div>
        <Registration onbuttonClick={buttonClick}/>
    </div>
  )
}

export default ParentComponent