import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

export default class ViewContainer extends Component {
  static propTypes = {
    defaultView: PropTypes.string,
    children: PropTypes.array
  }

  state = {
    activeView: null
  }

  componentDidMount() {
    this.setState({
      activeView: this.props.defaultView
    })
  }

  handleSwitchView = (activeView) => {
    this.setState({
      activeView
    })
  }

  render() {
    const {
      activeView
    } = this.state

    const onSwitchView = this.handleSwitchView

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onSwitchView,
        visible: activeView === child.key
      })
    })

    return (
      <div
        className={styles.viewContainer}>
        {children}
      </div>
    )
  }
}
