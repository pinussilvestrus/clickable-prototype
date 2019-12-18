import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

export default class HitBox extends Component {
  static propTypes = {
    position: PropTypes.object,
    /* eslint-disable-next-line react/no-unused-prop-types */
    to: PropTypes.string
  }

  render() {
    const {
      position
    } = this.props

    return (
      <div
        className={styles['hit-box']}
        style={{
          top: position.y,
          left: position.x,
          width: position.width,
          height: position.height }} />
    )
  }
}
