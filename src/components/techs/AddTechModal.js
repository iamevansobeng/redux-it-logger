import React, { useState } from "react"
import M from "materialize-css/dist/js/materialize.min.js"

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const onSubmit = () => {
    if (firstName === "") {
      M.toast({ html: "Please enter a Firstname" })
    } else if (lastName === "") {
      M.toast({ html: "Please enter a Lastname" })
    } else {
      M.toast({ html: "Message Saved" })
      setFirstName("")
      setLastName("")
    }
  }

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add a Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  )
}
export default AddTechModal
