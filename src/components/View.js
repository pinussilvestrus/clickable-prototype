import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

export default class View extends Component {
  static propTypes = {
    screen: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const {
      screen,
      children
    } = this.props

    return (
      <div className={styles.view}>
        <img src={screen} />
        { children }
      </div>
    )
  }
}
