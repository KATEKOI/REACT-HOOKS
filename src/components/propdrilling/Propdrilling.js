import React, { useState } from 'react'
import { products } from '../data'

// const Propdrilling = () => {
//     //   creating a state
//     const [items, setItems ] = useState(products);
     
//   return (
//     <div className='maindiv'>
//       <section>
//         <h1>prop drilling</h1>
//         {/* allitems is for looping thru */}
//         <AllItems items={items} />
//       </section>
//     </div>
//   )
// }
// const AllItems = ({ items }) => {
//     // console.log(prop);
//     return (
//     <div>
//             {
//                 items.map((item) => {
//                     return <SingleItem key={item.id} {...item} />
//                 })
//             }
//         </div>
//         )
// };
// const SingleItem = ({img, name }) => {

//     return (
//         <div>
//             <img src={img} height='100px' alt="" />
//             <h4>{name}</h4>
//         </div>
//     )
// }

// export default Propdrilling

//  CLEARING ITEMS
const Propdrilling = () => {
    //   creating a state
    const [items, setItems ] = useState(products);
     
    const removeItem = (id) => {
        // alert(id)
        setItems((prevItems) => {
            const newItems = prevItems.filter((item) => item.id !==id)
            return newItems
        })
    }
  return (
    <div className='maindiv'>
      <section>
        <h1>prop drilling</h1>
        {/* allitems is for looping thru */}
        <AllItems items={items} removeItem={removeItem} />
      </section>
    </div>
  )
}
// passing data as props()
const AllItems = ({ items, removeItem }) => {
    // console.log(prop);
    return (
    <div>
            {
                items.map((item) => {
                    return <SingleItem key={item.id} {...item}  removeItem={removeItem}/>
                })
            }
        </div>
        )
};
// passing down an individual item
const SingleItem = ({img, name, id, removeItem}) => {

    return (
        <div>
            <img src={img} height='100px' alt="" />
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove item</button>
        </div>
    )
}

export default Propdrilling
