import React, {useEffect, useState} from 'react'

// const Useeffect = () => {

//     const [value, setValue] = useState(0);
//     // DEPENDANCY ARRAY[value]
//     // useEffect(() => {
//     //     console.log('hello');
//     // },[value])
//     useEffect(() => {

//         if(value > 4 ){
//             document.title = `${value} number of clicks`
//     }
//         },[value]);
        
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>use effect basics</h1>
//         <h2>{value}</h2>
//         <button onClick={() => setValue(value + 1)}>Increase value</button>
//       </div>
//     </div>
//   )
// }


const Useeffect = () => {

    const [text, setText] = useState(0);
    // DEPENDANCY ARRAY[value]
    // useEffect(() => {
    //     console.log('hello');
    // },[value])
    useEffect(() => {

            document.title = `${text} new messages`
    
        },[text]);
        
  return (
    <div className='maindiv'>
      <div>
        <h1>use effect basics</h1>
        <h2>{text}</h2>
        <button onClick={() => setText(text + 1)}>Increase value</button>
      </div>
    </div>
  )
}

export default Useeffect
