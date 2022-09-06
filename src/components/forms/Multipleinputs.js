import React, { useState } from 'react'

// const Multipleinputs = () => {
// // creating object of a person
//     const [ person, setPerson ] = useState({username:'', useremail:'', userpassword:''})
//     const [people, setPeople] = useState([]);  
//        const getInputValue = (e) => {

//         const name = e.target.name;
//         const value = e.target.value;
        
//         setPerson({...person,[name]:value})
//        }

//        const addPerson = (e) => {
//         e.preventDefault();


//         if(person.username && person.useremail){
//             // const {username, useremail } = person
//         const newPerson = {...person, id:Math.random()}

//         // setPeople((people) => {
//         //     return [...people, newPerson];
//         // })
//         // we are taking the previous state (...people)
//         setPeople([...people, newPerson])
//        }
//        setPerson({username:'', userpassword:'', useremail:''})
//     }
//         // console.log(person.username, person.useremail, person.userpassword);
//     return (
//     <div className='maindiv'>
//         <div>
//          <h1>Multiple inputs</h1>
//          <form onSubmit={addPerson}>
//             <div>
//                 <input 
//                 type="text" 
//                 value={person.username} 
//                 name="username" 
//                 placeholder='Enter name' 
//                 onChange={getInputValue}/>
//             </div>
//             <div>
//                 <input 
//                 type="text" 
//                 value={person.useremail}
//                 name='useremail' 
//                 placeholder='Enter email'
//                 onChange={getInputValue} />
                
//             </div>
//             <div>
//                 <input 
//                 type="text" 
//                 value={person.userpassword} 
//                 name='userpassword' 
//                 placeholder='Enter password' 
//                 onChange={getInputValue}/>
//             </div>
//             <div>
//                 <button>submit</button>
//                 <button>clear all</button>
//             </div>
//         </form>
//         {/* invoking javascript */}
//         {
//             people.map((person) => {
//                 return(
//                     <div key={person.id}>
//                         <h4>{person.username}</h4>
//                         <h4>{person.useremail}</h4>
//                     </div>
//                 )
//             })
//         }
//         </div>
//     </div>
//   )
// }



        //  CLEARING ALL people
const Multipleinputs = () => {
    // creating object of a person
        const [ person, setPerson ] = useState({username:'', useremail:'', userpassword:''})
        const [people, setPeople] = useState([]);  
           const getInputValue = (e) => {
    
            const name = e.target.name;
            const value = e.target.value;
            
            setPerson({...person,[name]:value})
           }
    
           const addPerson = (e) => {
            e.preventDefault();
    
    
            if(person.username && person.useremail){
                // const {username, useremail } = person
            const newPerson = {...person, id:Math.random()}
    
            // setPeople((people) => {
            //     return [...people, newPerson];
            // })
            // we are taking the previous state (...people)
            setPeople([...people, newPerson])
           }
           setPerson({username:'', userpassword:'', useremail:''})
        }
            // console.log(person.username, person.useremail, person.userpassword);


            const clearPeople = () => {
                setPeople([])
                    };   
        return (
        <div className='maindiv'>
            <div>
             <h1>Multiple inputs</h1>
             <form onSubmit={addPerson}>
                <div>
                    <input 
                    type="text" 
                    value={person.username} 
                    name="username" 
                    placeholder='Enter name' 
                    onChange={getInputValue}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    value={person.useremail}
                    name='useremail' 
                    placeholder='Enter email'
                    onChange={getInputValue} />
                </div>
                <div>
                    <input 
                    type="text" 
                    value={person.userpassword} 
                    name='userpassword' 
                    placeholder='Enter password' 
                    onChange={getInputValue}/>
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>
            {/* invoking javascript */}
            {
                people.map((person) => {
                    return(
                        <div key={person.id}>
                            <h4>{person.username}</h4>
                            <h4>{person.useremail}</h4>
                            
                        </div>
                    )
                })
             }

              <button onClick={clearPeople}>clear all</button>
            </div>
        </div>
      )
    }



    //   CLEARING INDIVIDUAL ITEM
// const Multipleinputs = () => {
//         // creating object of a person
//             const [ person, setPerson ] = useState({username:'', useremail:'', userpassword:''})
//             const [people, setPeople] = useState([]);  
//                const getInputValue = (e) => {
        
//                 const name = e.target.name;
//                 const value = e.target.value;
                
//                 setPerson({...person,[name]:value})
//                }
        
//                const addPerson = (e) => {
//                 e.preventDefault();
        
        
//                 if(person.username && person.useremail){
//                     // const {username, useremail } = person
//                 const newPerson = {...person, id:Math.random()}
        
//                 // setPeople((people) => {
//                 //     return [...people, newPerson];
//                 // })
//                 // we are taking the previous state (...people)
//                 setPeople([...people, newPerson])
//                }
//                setPerson({username:'', userpassword:'', useremail:''})
//             }
//                 // console.log(person.username, person.useremail, person.userpassword);

//                 const removeItem = (id) => {
//                     setPeople((newPerson) => {
//                         let filteredPerson = newPerson.filter((person) => person.id !== id);
//                         return filteredPerson
//                     })
//                 }
                 
//             return (
//             <div className='maindiv'>
//                 <div>
//                  <h1>Multiple inputs</h1>
//                  <form onSubmit={addPerson}>
//                     <div>
//                         <input 
//                         type="text" 
//                         value={person.username} 
//                         name="username" 
//                         placeholder='Enter name' 
//                         onChange={getInputValue}/>
//                     </div>
//                     <div>
//                         <input 
//                         type="text" 
//                         value={person.useremail}
//                         name='useremail' 
//                         placeholder='Enter email'
//                         onChange={getInputValue} />
//                     </div>
//                     <div>
//                         <input 
//                         type="text" 
//                         value={person.userpassword} 
//                         name='userpassword' 
//                         placeholder='Enter password' 
//                         onChange={getInputValue}
//                         />
//                     </div>
//                     <div>
//                         <button>submit</button>
//                         {/* <button onClick={clearPeople}>clear all</button> */}
//                     </div>
//                 </form>
//                 {/* invoking javascript */}
//                 {
//                     people.map((person) => {
//                         return(
//                             <div key={person.id}>
//                                 <h4>{person.username}</h4>
//                                 <h4>{person.useremail}</h4>
//                                 <button onClick={() => removeItem(person.id)}>remove</button>
//                             </div>
//                         )
//                     })
//                 }
//                 </div>
//             </div>
//           )
//         }
export default Multipleinputs
