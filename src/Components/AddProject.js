import uuid from 'uuid'
import PropTypes from 'prop-types' // Documentation: https://www.npmjs.com/package/prop-types 
import React, { Component } from 'react'

class AddProject extends Component {
  constructor() {
    super()
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: [
      `Web Design`,
      `Web Development`,
      `Mobile Development`
    ]
  }

  handleSubmit(e) {
    e.preventDefault()

    const {
      refs,
    } = this

    if (!refs.title.value.length) {
      return alert(`Title is required`)
    }

    this.setState(
      {
        newProject: {
          id: uuid.v4(),
          title: refs.title.value,
          category: refs.category.value
        }
      },
      () => this.props.addProject(this.state.newProject)
    )
  }

  render() {
    const {
      categories
    } = this.props

    const categoryOptions = categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))

    return (
      <div>
        <h3>
          Add Project
        </h3>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label> <br />

            <input type="text" ref="title" />
          </div>

          <div>
            <label>Category</label> <br />

            <select ref="category" >
              {categoryOptions}
            </select>
          </div>

          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    )
  }
}

AddProject.proptype ={
  newProject: PropTypes.object,
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject
