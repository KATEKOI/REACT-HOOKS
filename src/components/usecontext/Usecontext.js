import React, { useState, useContext } from 'react'
import { products } from '../data';
// creating item context
//   const ItemsContext = React.createContext();
// const Usecontext = () => {
//     const [items, setItems ] = useState(products);
//   return (
//     // passing data as items/provides items array
//     <ItemsContext.Provider value={{ items }}>
//     <div className='maindiv'>
//       <div>
//         <h1>Use context</h1>
//         {/* callling the component */}
//         <AllItems/>
//         {/* <SingleItem/> */}
//       </div>
//     </div>
//     </ItemsContext.Provider>
//   )
// }
// // we are getting data through the usecontext
// const AllItems = () => {
//     // useconntext gets data from the itemscontext
//     const itemsData = useContext(ItemsContext)
//     // console.log(itemsData.items);
//     // looping through
//     return <div> 
//         {
//             itemsData.items.map((item) => {
//                 return<SingleItem key={item.id} {...item}/>
//             })
//         }
//     </div>
    
// }
// // passing down an individual item/destructuring
// const SingleItem = ({img, name}) => {
//     return <div>
//         <img src={img} height='100px' alt="" />
//         <h4>{name}</h4>
//     </div>
// }

// export default Usecontext





// // PASSING DATA DIRECTLY WITHOUT USING PROPS
// // creating item context
//   const ItemsContext = React.createContext();
// const Usecontext = () => {
//     const [items, setItems ] = useState(products);
//   return (
//     // passing data as items/provides items array/reason of creating two components is to create a hiarachy
//     // we are using usecontext to avoid using props
//     <ItemsContext.Provider value={{ items }}>
//     <div className='maindiv'>
//       <div>
//         <h1>Use context</h1>
//         {/* callling the component */}
//         <SingleItem/>
//       </div>
//     </div>
//     </ItemsContext.Provider>
//   )
// }
// // passing down an individual item
// const SingleItem = ({img, name}) => {
//   // we are extracting data from the itemscontext
//     const allItems = useContext(ItemsContext)
//     // getting data directly
//     // looping through
//     return <div>
//       {
//         allItems.items.map((item) => {
//           return (
//             <div key={item.id}>
//               <img src={item.img} height='100px' alt="" />
//               <h4>{item.name}</h4>
//             </div>
//           )
//         })
//       }
//     </div>
// }

// export default Usecontext




// REMOVE A SINGLE ITEM
// PASSING DATA DIRECTLY WITHOUT USING PROPS
// creating item context
const ItemsContext = React.createContext();
const Usecontext = () => {
    const [items, setItems ] = useState(products);
       
    const removeItem = (id) => {
      setItems((prevItems) => {
          let allItems = prevItems.filter((item) => item.id !== id)
          return allItems
      })
    }

  return (
    // passing data as items/provides items array/reason of creating two components is to create a hiarachy
    // we are using usecontext to avoid using props
    <ItemsContext.Provider value={{ items, removeItem }}>
    <div className='maindiv'>
      <div>
        <h1>Use context</h1>
        {/* callling the component */}
        <SingleItem/>
      </div>
    </div>
    </ItemsContext.Provider>
  )
}
// passing down an individual item
const SingleItem = ({img, name, id}) => {
    // we are extracting data from the itemscontext
    const removeItem = useContext(ItemsContext).removeItem;
    console.log(removeItem);
    const allItems = useContext(ItemsContext)
      // getting data directly
      // looping through
      return <div>
        {
          allItems.items.map((item) => {
           
            return (
              <div key={item.id}>
                <img src={item.img} height='100px' alt="" />
                <h4>{item.name}</h4>
                <button onClick={() => removeItem(item.id) }>Remove item</button>
              </div>
            )
          })
        }
      </div>
  }
export default Usecontext