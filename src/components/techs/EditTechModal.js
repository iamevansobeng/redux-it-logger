import React, { useState, useEffect } from "react"
import M from "materialize-css/dist/js/materialize.min.js"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { updateTech } from "../../actions/techActions"

const EditTechModal = ({ updateTech, current }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    if (current) {
      setFirstName(current.firstName)
      setLastName(current.lastName)
      console.log(current)
    }
  }, [current])

  const onSubmit = () => {
    if (firstName === "" || firstName === "") {
      M.toast({ html: "Add a name to the fields" })
    } else {
      const updTech = {
        id: current.id,
        firstName,
        lastName,
      }
      console.log(updTech)

      updateTech(updTech)
      M.toast({ html: `Tech Updated #No. ${current.id}` })

      setFirstName("")
      setLastName("")
    }
  }

  return (
    <div id='edit-tech-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit a Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect green waves-light btn'
          >
            Update Technician
          </a>
        </div>
      </div>
    </div>
  )
}

EditTechModal.propTypes = {
  current: PropTypes.object,
  updateTech: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  current: state.tech.current,
})
const modalStyle = {
  width: "75%",
  height: "75%",
}
export default connect(mapStateToProps, { updateTech })(EditTechModal)
