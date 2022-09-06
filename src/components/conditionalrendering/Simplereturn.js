import React, { useState, useEffect } from 'react'

// const Simplereturn = () => {

//     const [error, setError] = useState(false)
//     console.log(error);
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>condition rendering</h1>
//         <button onClick={() => setError(error)}>toggle state</button>
        
//       </div>
//     </div>
//   )
// }


   
        //  CONDITIONAL RENDERING
// const Simplereturn = () => {

//    const [error, setError] = useState(false);
//    console.log(error);

// return (
//   <div className='maindiv'>
//     <div>
//       <h1>conditional rendering</h1>
//       {/* {
//         error && <h2>error</h2>
//       } */}
//       {
//         error ? <h2>there is an error</h2> : <h2>there is no error</h2>
//       }
//       <button onClick={() => setError(!error)}>CLICK</button>
//     </div>
//   </div>
// )
// }


// const Simplereturn = () => {

//   const [text, setText] = useState('kate');
  
//   // const wordOne = text || 'hello world'
//   // const wordTwo = text && 'hello world'

// return (
//  <div className='maindiv'>
//    <div>
//      <h1>conditional rendering</h1>
//     {/* <h2>{wordOne}</h2>
//     <h2>{wordTwo}</h2> */}
//     {
//       text ? <h2>value of text is true</h2> : <h2>the value of the state is false</h2>
//     }
//     <button onClick={() => setText(!text)}>Change state</button>
//    </div>
//  </div>
// )
// }




const Simplereturn = () => {

  const [text, setText] = useState('kate');
  
  // const wordOne = text || 'hello world'
  // const wordTwo = text && 'hello world'

return (
 <div className='maindiv'>
   <div>
     <h1>conditional rendering</h1>
    {/* <h2>{wordOne}</h2>
    <h2>{wordTwo}</h2> */}
    {
      text ? <Item/> : <h2>There is no Item</h2>
    }
    <button onClick={() => setText(!text)}>Change state</button>
   </div>
 </div>
)
}
const Item = () => {
    const [screenWidth, setScreenwidth] = useState(window.innerWidth)
    
    const setWidth = () => {
        setScreenwidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", setWidth);

        return () => {
            window.removeEventListener('resize', setWidth)
        }
    },[])
    return(
      <div>
        <h1>screen width</h1>
        <h2>{screenWidth}</h2>
      </div>
    )
}
export default Simplereturn
