import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'

class DisplayForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.context.store.subscribe(() => this.setState(this.context.store.getState()));
  }

  // TODO: Need to change .map to .forEach, so that we can return input tags instead of div tags,
  // that way the Submit button is grouped in the same level with the other input tags
  renderNames() {
    if (this.state.form.fieldArrays.values.candidates) {
      let candidates = this.state.form.fieldArrays.values.candidates
      return (
        candidates.map((candidate, index) => {
          let firstName = candidate.firstName
          let lastName = candidate.lastName
          let fullName = `${firstName || ''} ${lastName || ''}`
          return (
            <div key={index}>
              <input type="radio" id={fullName} name="candidate" />
              <label htmlFor={fullName}> {fullName}</label>
            </div>
          )
        })
      )
    }
  }

  render() {
    if (this.state && this.state.form && this.state.form.fieldArrays.values) {
      return (
        <form>
          <div>
            <h3>
              Position: { this.state.form.fieldArrays.values.positionName }
            </h3>
          </div>
          <div>
            <fieldset>
              { this.renderNames() }
            </fieldset>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}


export default connect()(DisplayForm)
