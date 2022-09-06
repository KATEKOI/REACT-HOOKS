import React, {useRef} from 'react'

const Useref = () => {

    const useremail = useRef(null)
    const username = useRef(null)

    const submitForm = () => {
        console.log(username.current.value);
        console.log(useremail.current.value);
    }
  return (
    <div className='maindiv'>
      <div>
        <h1>use Ref</h1>
        <div>
            <input 
            type="text" 
            name="" 
            id="" 
            ref={username}
            placeholder='Enter name'/>
        </div>
        <div>
            <input 
            type="text" 
            name="" 
            id="" 
            ref={useremail}
            placeholder='Enter email'/>
        </div>
        <div>
            <button onClick={submitForm}>submit</button>
        </div>
      </div>
    </div>
  )
}

export default Useref
