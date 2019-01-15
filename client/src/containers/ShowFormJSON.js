import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'

class ShowFormJSON extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.context.store.subscribe(() => this.setState(this.context.store.getState()));
  }

  render() {
    return (
      <pre>
        <code>
          {
            JSON.stringify(this.state, null, 4)
          }
        </code>
      </pre>
    )
  }
}


export default connect()(ShowFormJSON)
