import React, { Component } from 'react'

import { View } from 'clickable-prototype'

import view1 from './views/view1.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <View screen={view1} />
      </div>
    )
  }
}
