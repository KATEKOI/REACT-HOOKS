import React from 'react'
import { useFetch } from './Usefetch'
import { Link } from "react-router-dom";

// const Fetch = () => {

// const url = "https://api.github.com/users"

//     const { loading, people } = useFetch(url)
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>custom hooks</h1>
//         {
//             loading && <h2>Loading data...</h2> 
//         }
//         {
//             people && people.map((person) => {
//                 const  {login, id} = person
//                 return (
//                     <div key= {id}>
//                         <h4>{login}</h4>
//                     </div>
//                 )
//             })
//         }
//         {
//             people && <Person/>
//         }
//       </div>
//     </div>
//   )
// }
// const Person = () => {
    
// }


const url = "https://api.github.com/users";
const Fetch = () => {

    const { loading, people } = useFetch(url)
    return (
      <div className='maindiv'>
        <div>
          <h1>custom hooks</h1>
          {
              loading && <h2>Loading data...</h2> 
          }
          {
             people.map((person) => {
                console.log(person);
                return <Person key={person.id} {...person}/>
              })
          }
          {
              people && <Person/>
          }
        </div>
      </div>
    )
  }
  const Person = ({ login, avatar_url, id}) => {
    return (
        <Link to={`/person/${id}`}>
          <img src={avatar_url} height='100px' alt="" />
          <h4>{login}</h4>
        </Link>
    )
  };
  

export default Fetch
