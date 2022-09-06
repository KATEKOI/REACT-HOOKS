// import React from 'react'
// import { useParams } from "react-router-dom";
// import { useFetch } from "./customhooks/Usefetch";
// const url = 'https://api.github.com/users'
// // const Person = () => {
// //     const param = useParams();
// //     console.log(param.id);
// //   return (
// //     <div className='maindiv'>
// //         <div>
// //         <h1>personal details</h1>
// //         </div>
      
// //     </div>
// //   )
// // }

// // method2
// const Person = () => {
    
//     const { id } = useParams();
//     console.log(id);
//     const { loading , people } = useFetch(url)
//   return (
//     <div className='maindiv'>
//         <div>
//         <h1>personal details</h1>
//         {
//             loading && <h2>loading</h2>
//         }
//         {
//             people.filter((person) => person.id !==id)
//         }
//         </div>
      
//     </div>
//   )
// }

// export default Person
