import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deleteTech } from "../../actions/techActions"
import M from "materialize-css/dist/js/materialize.min.js"
import { setCurrent } from "../../actions/techActions"

const TechItem = ({ tech, deleteTech, setCurrent }) => {
  const onClick = () => {
    deleteTech(tech.id)
    M.toast({
      html: `${tech.firstName} ${tech.lastName} removed from Technician`,
    })
  }
  return (
    <li key={tech.id} className='collection-item'>
      <div className=''>
        {tech.firstName} {tech.lastName}
        <a
          href='#edit-tech-modal'
          className='modal-trigger primary-content'
          onClick={() => setCurrent(tech)}
        >
          <i className='material-icons grey-text'>edit</i>
        </a>
        <a href='#' onClick={onClick} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech, setCurrent })(TechItem)
