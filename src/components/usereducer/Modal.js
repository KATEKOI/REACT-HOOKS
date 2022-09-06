import React, { useEffect } from 'react'

// const Modal = ({modalContent, closeModal}) => {
//     useEffect(() => {
//         setTimeout(() => {
//             closeModal()
//         }, 2000)
//     })
//   return (
//     <div>
//         <h5>{modalContent}</h5>
//     </div>
//   )
// }

// export default Modal
const Modal = ({modalContent, closeModal}) => {
  useEffect(() => {
            setTimeout(() => {
                closeModal()
            }, 2000)
        })
return (
  <div>
      <h5>{modalContent}</h5>
  </div>
)
}

export default Modal
