import React from 'react'
import { products } from './data'

// const productone = {
//     img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?7613",
//     name:'fresh fri',
//     id:1
//     }
//     const producttwo = {
//         img: "https://ke.jumia.is/cms/2022/JA22/Teasing/Freelinks/Electronics/32-Tvs.png",
//         name:"vision tv",
//         id:2
//         }
// const Shop = () => {
//   return (
//     <section>
//         <Image/>
//         <Ant/>
//     </section>
//   )
// }

// const Image = () => {
//     return (
//       <div>
//         <img src={productone.img} height="100px" alt="" />
//         <Name/>
//       </div>
//     )
//   }
//   const Name = () => {
//     return (
//       <h4>{productone.name}</h4>
//     )
//   }
//   const Ant = () => {
//     return (
//       <div>
//         <img src={producttwo.img} height="100px" alt="" />
//         <Umm/>
//       </div>
//     )
//   }
//   const Umm = () => {
//     return (
//       <h4>{producttwo.name}</h4>
//     )
//   }

// export default Shop

// const products = [
//     {
//     img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?7613",
//     name:'fresh fri',
//     id:1
//     } ,
//     {
//         img: "https://ke.jumia.is/cms/2022/JA22/Teasing/Freelinks/Electronics/32-Tvs.png",
//         name:"vision tv",
//         id:2
//         },
//     ]

//     const Shop = () => {
//           return (
//             <section>
//                 {
//                     products.map((product) => {
//                         return (
//                             <div key={product.id}>
//                                 <img src={product.img} height="100px" alt="" />
//                                 <h4>{product.name}</h4>
//                             </div>
//                         )
//                     })
//                 }
//             </section>
//           )
//         }
//  export default Shop



// //  props (passing through properties)


    const Shop = () => {
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
 export default Shop

// 
