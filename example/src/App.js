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
            screen={view1}
            width='1420px'
            height='730px'>
            <HitBox
              position={{y: 325, x: 555, width: 320, height: 70}}
              to='view2' />
          </View>
          <View
            key='view2'
            screen={view2}
            width='1420px'
            height='730px'>
            <HitBox
              position={{y: 450, x: 555, width: 320, height: 70}}
              to='view1' />
          </View>
        </ViewContainer>
      </div>
    )
  }
}
