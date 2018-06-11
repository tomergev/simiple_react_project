import './App.css'
import uuid from 'uuid'
import React, { Component } from 'react'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [] // Creating a default value. Best practice
    }
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Design"
        }
      ]
    })
  }

  /*
    The function below is the correct way to add data to the variable set in the constructor function above
    For example, if I were to add data I acquire from an AJAX (API) call, I should set the state in the componentDidMount() function below
  */
  componentDidMount() {
    this.getProjects()
  }

  handleAddProject(project) {
    const projects = this.state.projects
    projects.push(project)

    this.setState({
      projects
    })
  }

  handleDeleteProject(id) {
    const { projects } = this.state
    const currentStateProjects = projects

    const filterOutIdOfSpecificProject = currentStateProjects.filter(project => project.id !== id)

    this.setState({
      projects: filterOutIdOfSpecificProject
    })
  }

  render() {
    const {
      handleAddProject,
      handleDeleteProject
    } = this

    return (
      <div className="App">
        <AddProject addProject={handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={handleDeleteProject.bind(this)} />
      </div>
    )
  }
}

export default App
