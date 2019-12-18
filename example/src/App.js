import React, { Component } from 'react'

import { View, HitBox, ViewContainer } from 'clickable-prototype'

import view1 from './views/view1.png'
import view2 from './views/view2.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1><span>clickable-prototype</span> Demo</h1>
        <ViewContainer defaultView='view1' className='container'>
          <View key='view1' screen={view1}>
            <HitBox
              position={{y: 365, x: 560, width: 330, height: 70}}
              to='view2' />
          </View>
          <View key='view2' screen={view2}>
            <HitBox
              position={{y: 500, x: 560, width: 330, height: 70}}
              to='view1' />
          </View>
        </ViewContainer>
      </div>
    )
  }
}
