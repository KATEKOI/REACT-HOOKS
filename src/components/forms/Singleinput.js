import React, {useState} from 'react'

// const Singleinput = () => {

//   const [username, setUserName] = useState('')
//   const [useremail, setUserEmail] = useState('')
//   const [userpassword, setUserPassword] = useState('')
  
//   const submitForm = () => {
//     console.log(username);
//     console.log(useremail);
//     console.log(userpassword);
//     setUserName("")
//     setUserEmail("")
//     setUserPassword('')
//   }

//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>single inputs submit</h1>
//         <div>
//           <input 
//           type="text" 
//           name="" 
//           id=""  
//           placeholder='Enter your name'
//           value={username}
//           onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//         <div>
//           <input 
//           type="text" 
//           name="" 
//           id=""  
//           placeholder='Enter your email'
//           value={useremail}
//           onChange={(e) => setUserEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input 
//           type="text" 
//           name="" 
//           id=""  
//           placeholder='Enter your password'
//           value={userpassword}
//           onChange={(e) => setUserPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <button onClick={submitForm}>SUBMIT</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Singleinput

const Singleinput = () => {

  const [username, setUserName] = useState('')
  const [useremail, setUserEmail] = useState('')
  const [userpassword, setUserPassword] = useState('')
  const [people, setPeople] = useState([])
  
  const submitForm = () => {
    if(username && useremail){
      // creating an object /of a person
      // key is a unique id
      const person = { username, useremail, id:Math.random() }

      setPeople((people) => {
        return[...people, person]
      })
      setUserName("")
      setUserEmail("")
      setUserPassword('')
    }
  }

  return (
    <div className='maindiv'>
      <div>
        <h1>single inputs submit</h1>
        <div>
          <input 
          type="text" 
          name="" 
          id=""  
          placeholder='Enter your name'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input 
          type="text" 
          name="" 
          id=""  
          placeholder='Enter your email'
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <input 
          type="text" 
          name="" 
          id=""  
          placeholder='Enter your password'
          value={userpassword}
          onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={submitForm}>SUBMIT</button>
        </div>
        {/* javascript code must start with cali brackets*/ }
        {
          people.map((person) => {
            return (
              <div key={person.id}>
                <h4>{person.username}</h4>
                <h4>{person.useremail}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Singleinput

