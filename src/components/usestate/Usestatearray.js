import React, { useState} from 'react'
// if you import products through default you should do no 3
import { products } from '../data'

// const Usestatearray = () => {

//     const[items, setItems ] = useState(products)
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>use state arrays</h1>
//         {
//             items.map((product) => {
//                 return(
//                     <div key={product.id}>
//                         <img src= {product.img} height="100px" alt="" />
//                         <h4>{product.name}</h4>
//                     </div>
//                 )
//             })
//         }
//       </div>
//     </div>
//   )
// }

            
            //  METHOD 1(clearing All items)


// const Usestatearray = () => {
// // with an empty array you cannot loop thru
//     const clearItems = () => {
//         setGrocery([])
//     };
//     const[grocery, setGrocery ] = useState(products)
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>use state arrays</h1>
//         {
//             grocery.map((product) => {
//                 // you must return a div
//                 return(
//                     <div key={product.id}>
//                         <img src= {product.img} height="100px" alt="" />
//                         <h4>{product.name}</h4>
//                     </div>
//                 )
//             })
//         }
//         <button onClick={clearItems}>clear all items</button>
//       </div>
//     </div>
//   )
// }



             //  METHOD 2(clearing All items)


// const Usestatearray = () => {
//     // with an empty array you cannot loop thru
       
//         const[grocery, setGrocery ] = useState(products)
//       return (
//         <div className='maindiv'>
//           <div>
//             <h1>use state arrays</h1>
//             {
//                 grocery.map((product) => {
//                     // you must return a div
//                     return(
//                         <div key={product.id}>
//                             <img src= {product.img} height="100px" alt="" />
//                             <h4>{product.name}</h4>
//                         </div>
//                     )
//                 })
//             }
//             <button onClick={() => setGrocery([])}>clear all items</button>
//           </div>
//         </div>
//       )
//     }


//             CLEARING INDIVIDUAL ITEM

const Usestatearray = () => {
    // with an empty array you cannot loop thru
       
        const removeItem = (id) => {
        setGrocery((newGrocery) => {
            let filteredGrocery = newGrocery.filter((product) => product.id !== id);
            return filteredGrocery
        })
       }
        const[grocery, setGrocery ] = useState(products)
        
        return (
        <div className='maindiv'>
          <div>
            <h1>use state arrays</h1>
            {
                grocery.map((product) => {
                    // you must return a div
                    return(
                        <div key={product.id}>
                            <img src= {product.img} height="100px" alt="" />
                            <h4>{product.name}</h4>
                            <button onClick={() => removeItem(product.id)}>remove</button>
                        </div>
                    )
                })
            }
            <button onClick={() => setGrocery([])}>clear all items</button>
          </div>
        </div>
      )
    }
export default Usestatearray


//           CALLBACK FUNCTION/clearing an individual item
// const Usestatearray = () => {
//   // with an empty array you cannot loop thru
//   const[grocery, setGrocery ] = useState(products)


//       const clearItem = (id) => {
//       setGrocery((newGrocery) => {
//           let filteredGrocery = newGrocery.filter((product) => product.id !== id);
//           return filteredGrocery
//       })
//      }
//      const sayHi = () => {
//       console.log('good afternoon');
//      }
     
      
//       return (
//       <div className='maindiv'>
//         <div>
//           <h1>use state arrays</h1>
//           {
//               grocery.map((product) => {
//                   // you must return a div
//                   return(
//                       <div key={product.id}>
//                           <img src= {product.img} height="100px" alt="" />
//                           <h4>{product.name}</h4>
//                           <button onClick={() => clearItem(product.id)}>remove</button>
//                       </div>
//                   )
//               })
//           }
//           <button onClick={clearItem}>clear all items</button>
//           <button onClick={() => sayHi()}>call back</button>
//         </div>
//       </div>
//     )
//   }
// export default Usestatearray
