import React, { useState } from 'react'

// const Usestateobject = () => {

//     // array
//     // person is the state
//     const [person, setPerson] = useState({
//         name: 'kate',
//         age:30,
//         gender:'female'
// })
// const changePerson = () => {
//     // setPerson({name:'wangui'})
//     // spread operator
//     setPerson({...person, name:'wangui', age:20})
// }
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>use state objects!</h1>
//         <h2>{person.name}</h2>
//         <h2>{person.age}</h2>
//         <h2>{person.gender}</h2>
//         <button onClick={changePerson}>change person</button>
//       </div>
//     </div>
//   )
// }

const Usestateobject = () => {

  // array
  // person is the state
  const [person, setPerson] = useState({
    // passing an object
      name: 'kate',
      age:30,
      gender:'female'
})
const changevalue = () => {
  // setPerson({name:'wangui'})
  // spread operator  using...gives the component/it inherits the property
  setPerson({...person, name:'wangui', age:20})
}
return (
  <div className='maindiv'>
    <div>
      <h1>use state objects!</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.gender}</h2>
      <button onClick={changevalue}>change person</button>
    </div>
  </div>
)
}

export default Usestateobject
