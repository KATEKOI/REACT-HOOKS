import React, { useEffect, useState } from 'react'

// const Useeffectfetch = () => {

//     const [people, setPeople] = useState([]);
//     const url = 'https://api.github.com/users'
//     useEffect(() => {
//         // fetching data from the url
           
        
//         //    using promises
//     //     fetch(url)
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //   })

//         // using asyncawait
//     const getData = async () => {
//         const response = await fetch(url);
//         const data = await response.json();
//         setPeople(data);
//     }
//     getData();
//     }, [])

//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>useeffect fetch data</h1>
//         {
//             people.map((person) => {
//                 return (
//                     <div key={person.id}>
//                         <h4>{person.login}</h4>
//                         <img src={person.avatar_url} height="100px" alt=''/>
//                     </div>
//                 )
//             })
//         }
//       </div>
//     </div>
//   )
// }



            //  CLEAN DATA
const Useeffectfetch = () => {

    const [people, setPeople] = useState([]);
    const url = 'https://api.github.com/users'
    useEffect(() => {
        // fetching data from the url
           
        
        //    using promises
    //     fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })

        // using asyncawait
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPeople(data);
    }
    getData();
    }, [])

  return (
    <div className='maindiv'>
      <div>
        <h1>useeffect fetch data</h1>
        {
            people.map((person) => {
              return<Newperson key={person.id} person={person}/>
            })
        }
      </div>
    </div>
  )
}

const Newperson = (data) => {
    const { login , avatar_url} = data.person
    return(
        <div>
            <h4>{login}</h4>
            <img src={avatar_url} height='100px' alt="" />
        </div>
    )
}

export default Useeffectfetch
