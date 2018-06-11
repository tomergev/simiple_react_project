import PropTypes from 'prop-types' // Documentation: https://www.npmjs.com/package/prop-types 
import React, { Component } from 'react'

class ProjectItem extends Component {
  deleteProject() {
    const { id } = this.props.project // id of the project the user wishes to delete

    this.props.onDelete(id)
  }

  render() {
    const { project } = this.props

    return (
      <li className="ProjectItem">
        <strong> {project.title}: </strong> {project.category}
        <a href="#" onClick={this.deleteProject.bind(this)}>X</a>
      </li>
    )
  }
}

ProjectItem.proptype ={
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem
