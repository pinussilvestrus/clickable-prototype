import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

export default class View extends Component {
  static propTypes = {
    screen: PropTypes.string
  }

  render() {
    const {
      screen
    } = this.props

    return (
      <div className={styles.view}>
        <img src={screen} />
      </div>
    )
  }
}
