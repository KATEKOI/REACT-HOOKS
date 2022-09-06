// import React, {useState, useEffect} from 'react'

// const Multiplereturns = () => {

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     const [user, setUser] = useState('')

//     const url = 'https://api.github.com/users';

//     const getUsers = () => {
//         fetch(url)
//         .then((response) => {
//             console.log(response.status);
//             if (response.status >= 200 && response.status <= 299){
//                 return response.json();
//             }else {
//                 setTimeout(() => {
//                     setLoading(false);
//                     setError(true)
//                     throw new Error(response.statusText)
//                 }, 2000)
               
//             }
//         })
//         .then((people) => {
            
//             const newUser = people.map((person) => {
//                 const { login,id } = person
//                 return (
//                     <div key={id}> <h3>{login}</h3></div>
//                 )
//             })
//             setTimeout(() => {
//                 setUser(newUser);
//                 setLoading(false)
//             }, 2000)
//         })
//     }
//     useEffect(() => {
//         getUsers();
//     },[])
//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>Multiple returns</h1>
//         {
//             loading && <h4>Loading...</h4>
//         }
//         {
//             error && <h4>there is an error;</h4>
//         }
//         {
//             user && <h4>{user}</h4>
//         }
//       </div>
//     </div>
//   )
// }

// export default Multiplereturns


import {useEffect, useState} from 'react'

const Multiplereturns = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [user, setUser] = useState('')
  
    const url = "https://api.github.com/users"
    const fetchUsers = () => {
        fetch(url)
        .then((response) => {

            if(response.status >= 200 && response.status <= 299){
                return response.json();
            }
            else {
                setLoading(false)
                setError(true);
                throw new Error('response.statusText')
            }
        })
        .then((people) => {
            const newPerson = people.map((person) => {
                const {id, login } = person
                return(
                    <div key={id}> 
                        <h6>{login}</h6>
                    </div>
                )
            })
            setTimeout(() => {
                setUser(newPerson);
                setLoading(false)
            })
        })
    }
    useEffect(() => {
        fetchUsers();
    },[])
  
    return (
    <div className='maindiv'>
     <div>
     <h1>Multiple returns</h1>
      {
        loading && <h2>loading data...</h2>
      }
       {
        error && <h2>there is an error...</h2>
      }
       {
        user && <h2>{user}</h2>
      }
     </div>
    </div>
  )
}

export default Multiplereturns

