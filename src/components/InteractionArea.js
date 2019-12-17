import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

export default class InteractionArea extends Component {
  static propTypes = {
    position: PropTypes.object,
    to: PropTypes.string
  }

  render() {
    const {
      position
    } = this.props

    return (
      <div
        className={styles.area}
        style={{
          top: position.y,
          left: position.x,
          width: position.width,
          height: position.height }} />
    )
  }
}
