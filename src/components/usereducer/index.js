import React,{ useState, useReducer } from 'react'
import Modal from './Modal'
// const Index = () => {

//     const [name, SetName] = useState('');
//     const [people, setPeople] = useState([]);
//     const [modal, setModal] = useState(false);

//     const submitPerson =() => {
//         // if the name exists
//         if(name){
//             const newPerson = {username:name, id:Math.random()}

//             // inheriting the state from the previous(...)people
//             setPeople([...people, newPerson])
//             setModal('')
//             setModal(true);
//             setTimeout(() => {
//                 setModal(false)
//             }, 1000)
//         }
//       }

//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>Use reducer</h1>
//         {modal && <Modal/>}
//         <div>
//             <input 
//             value={name}
//             onChange={(e) => SetName(e.target.value)}
//             type="text" 
//             name='' 
//             placeholder='Enter your name' />
//             <button onClick={submitPerson}>SUBMIT</button>
//         </div>
//         {
//             people.map((person) => {
//                 return (
//                     <>
//                     <div key={person.id}>
//                         <h4>{person.username}</h4>
//                     </div>
//                     </>
//                 )
//             })
//         }
//       </div>
//     </div>
//   )
// }



// USING THE USE REDUCER
// const reducer = (state, action) => {

//     // takes in aprevious state'state' and return a new state,new people'
//     if(action.type === 'ADD-PERSON'){
//         const newPeople = [...state.people, action.payload];
//         return {...state, modalOpen: true, people: newPeople, modalContent:'person added successfully'}
//     }
//     if (action.type === 'NO-NAME') {
//         return{...state, modalOpen:true, modalContent:'please add a name'}
//     }
//     if (action.type === 'CLOSE-MODAL') {
//         return{...state, modalOpen:false}
//     }
//     return state;
// }
// const defaultState ={
//     modalOpen: false,
//     people:[],
//     modalContent: ''
// }
// const Index = () => {

//     const [name, SetName] = useState('');
//     // we are going to pass the previous state dispatch is the function
//     // reducer function takes in a state and action
//     const [reducerState, dispatch] = useReducer(reducer, defaultState);
//     // we are passing n event(of adding a person) to prevent the default
//     const addPerson = (e) => {
//         e.preventDefault()
//         if(name){
//             const newPerson = {name, id:Math.random()}
//             // we then dispatch the person.  Dispatch is a function that takes two parameters(type/action)
//             dispatch({type:'ADD-PERSON', payload:newPerson})
//             SetName('')
//         }
//         else {
//             dispatch({type:'NO-NAME'})
//         }
//     }
//     const closeModal = () => {
//         dispatch({type:'CLOSE-MODAL'})
//     }

//   return (
//     <div className='maindiv'>
//       <div>
//         <h1>Use reducer</h1>
//         {reducerState.modalOpen && (
//             <Modal modalContent={reducerState.modalContent}
//              closeModal={closeModal}
//              />
//         )}
//             <form onSubmit={addPerson}>
//                 <input 
//                 value={name}
//                 onChange={(e) => SetName(e.target.value)}
//                 type="text" 
//                 name='' 
//                 placeholder='Enter your name' 
//                 id=''/>
//                 <button type='submit'>SUBMIT</button>
//             </form>
//             {reducerState.people.map((person) => {
//                     return (
//                         <>
//                         <div key={person.id}>
//                             <h4>{person.name}</h4>
//                         </div>
//                         </>
//                     );
//                 })
//             }
//       </div>
//     </div>
//   )
// }

// export default Index
const reducer = (state, action) => {
    if (action.type === "NEW-PERSON"){
        const newPeople = [...state.people, action.payload]

        return {...state, isModalOpen:true, people:newPeople, modalContent:'person added'}
    }
    if (action.type === 'NO-VALUE') {
        return{...state, isModalOpen:true, modalContent:'please add a name'}
    }
    if (action.type === 'CLOSE-MODAL') {
        return{...state, isModalOpen:false}
    }
    if (action.type === 'REMOVE-PERSON') {
        const filteredArray = state.people.filter((person) => person.id !== action.payload)
        return {...state, people:filteredArray}
    }
    return state
}
const defaultState = {
    isModalOpen:false,
    people:[],
    modalContent:""
}

const Index = () => {

    const [name, setName] = useState('')
    // the reducer carries two states.defaultstate is an object
    const [state, dispatch] = useReducer(reducer, defaultState)

    const addPerson = (e) => {
        // prevent -stops  reloading the page
        e.preventDefault();

        if(name){
            const newPerson = {name,id:Math.random()};
            dispatch({type: 'NEW-PERSON', payload:newPerson})
            setName('')
        }
        else{
            dispatch({type: 'NO-VALUE'})
        }
    }
    const closeModal = () => {
        dispatch({type: 'CLOSE-MODAL'})
    }
  return (
    <div className='maindiv'>
      <div>
        <h1>Use reducer</h1>
        {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
        <form onSubmit={addPerson}>
            <input 
            type="text" 
            name='' 
            id='' 
            onChange={(e) => setName(e.target.value)}
            value={name}/>
            <button>Submit</button>
        </form>
        {/* looping through */}
        {
            state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                        <button onClick={() => dispatch({type:'REMOVE-PERSON', payload:person.id})}>REMOVE</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Index

