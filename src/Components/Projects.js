import PropTypes from 'prop-types' // Documentation: https://www.npmjs.com/package/prop-types 
import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id)
  }

  render() {
    const { projects } = this.props

    const projectItems = projects ? projects.map(project => (
      <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)} />
    )) : `The project array is not part of the state in the parent component` // This will not be invoked because I am setting a default value of an empty array

    return (
      <div className="Projects">
        <h3>
          Latest Projects
        </h3>
        {projectItems}
      </div>
    )
  }
}

Projects.proptype ={
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects
