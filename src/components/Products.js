import React from 'react'

// const products = [
//     {
//         img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/332152/1.jpg?7522",
//         name: "usb thermal",
//         id:1

//     },
//     {
//         img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/208434/1.jpg?4755",
//         name:"picnic folding",
//         id:2
        
//     },
// ]
// const Products = () => {
//     return (
//         <section>{
//             products.map((product) => {
//                 return (
//                     <div key={product.id}>
//                       <img src={product.img} height="100px" alt="" />
//                       <h4>{product.name}</h4>
//                     </div>
//                   )
//             })
//         }</section>
//       )
// }

// export default Products


const products = [
    {
        img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/332152/1.jpg?7522",
        name: "usb thermal",
        id:1

    },
    {
        img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/208434/1.jpg?4755",
        name:"picnic folding",
        id:2
        
    },
]
const Products = () => {
    return (
      <section>
          {
              products.map((product) => {
                  return <Product key={product.id} items={product}/>
              })
          }
      </section>
    )
  }
  const Product = (props) => {
      // console.log(props);
      const { name, id, img } = props.items;
      return (
          <div>
              <img src={img} height="100px" alt="" />
              <h4>{name}</h4>
          </div>
      )
  }
export default Products


