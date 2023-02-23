import React, {useState} from 'react'

function SignIn(props) {

    const {onbuttonClick} = props

    const [userName,setuserName] = useState('');
   
    const handleChange = (event) => {
        setuserName(event.target.value);
      };

    const signInHandler = () => {
        onbuttonClick(userName)
    }
  return (
    <div className='main-div'>
        <div className='sub-div'>
            <label>User name</label>
            <input type='text' id='userName' value={userName} onChange={handleChange}></input>
            <br />
            <label>password</label>
            <input type='password' id='passWord'></input>
            <br />
            <button onClick={signInHandler}>Sign in</button>          
        </div>
        <div> 
          <label>Hello {userName}</label></div>
    </div>
  )
}

export default SignIn