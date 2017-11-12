import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {Route, Switch} from 'react-router'

import {pages} from '../actions'
import Explorer from './files-explorer'
import Preview from './files-preview'

class Files extends Component {
  componentWillMount () {
    this.props.load()
  }

  componentWillUnmount () {
    this.props.leave()
  }

  render () {
    return (
      <Row>
        <Col sm={10} smOffset={1}>
          <Switch>
            <Route path='/files/preview' component={Preview} />
            <Route path='/files' component={Explorer} />
          </Switch>
        </Col>
      </Row>
    )
  }
}

Files.propTypes = {
  load: PropTypes.func.isRequired,
  leave: PropTypes.func.isRequired
}

export default connect(null, {...pages.files})(Files)
