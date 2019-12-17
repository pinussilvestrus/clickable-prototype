import React, { Component } from 'react'

import { View, InteractionArea, ViewContainer } from 'clickable-prototype'

import view1 from './views/view1.png'
import view2 from './views/view2.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <ViewContainer defaultView='view1'>
          <View key='view1' screen={view1}>
            <InteractionArea
              position={{y: 81, x: 644, width: 50, height: 20}}
              to='view2' />
          </View>
          <View key='view2' screen={view2} />
        </ViewContainer>
      </div>
    )
  }
}
