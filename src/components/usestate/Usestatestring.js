import React, { useState } from 'react'

// const Usestatestring = () => {

//     const [name, setName] = useState('')
//     const toggle = () => {

//         if(name == ''){
//             setName("clicked")
//         }else {
//             setName('')
//         }
//     }
//     // console.log(name);
//     // console.log(setName);
//   return (
//     <div className='maindiv'>
//         <div>
//       <h1>Use state basic string</h1>
//       <h5>{name}</h5>
//       <button onClick={toggle}>toggle state</button>
//       </div>
//     </div>
//   )
// }

const Usestatestring = () => {


  const changeState = () => {

      if(text == 'kate'){
          setText("keli")
      }else {
        setText('kate')
      }
  }
  const [text, setText] = useState('kate')
return (
  <div className='maindiv'>
      <div>
    <h1>Use state basic string</h1>
    <h5>{text}</h5>
    <button onClick={changeState}>toggle state</button>
    </div>
  </div>
)
}

export default Usestatestring
