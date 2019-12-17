import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InteractionArea from './InteractionArea'

import styles from '../styles.css'

export default class View extends Component {
  static propTypes = {
    screen: PropTypes.string,
    children: PropTypes.object,
    onSwitchView: PropTypes.func,
    visible: PropTypes.bool
  }

  handleAreaClick = (area) => {
    const {
      onSwitchView
    } = this.props

    onSwitchView(area.props.to)
  }

  render() {
    const {
      screen,
      children,
      visible
    } = this.props

    const handleAreaClick = this.handleAreaClick

    const areaDiv = React.Children.map(children, child => {
      return (
        <div onClick={handleAreaClick.bind(this, child)}>{child}</div>
      )
    })

    return (
      <div
        className={styles.view}
        style={{visibility: visible ? 'visible' : 'hidden'}}>
        <img src={screen} />
        { areaDiv }
      </div>
    )
  }
}
