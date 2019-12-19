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
          <View
            key='view1'
            className='custom-view'
            screen={view1}
            width='1220px'
            height='630px'>
            <HitBox
              position={{y: 380, x: 477, width: 280, height: 60}}
              to='view2' />
          </View>
          <View
            key='view2'
            className='custom-view'
            screen={view2}
            width='1220px'
            height='630px'>
            <HitBox
              position={{y: 490, x: 477, width: 280, height: 60}}
              to='view1' />
          </View>
        </ViewContainer>
      </div>
    )
  }
}
