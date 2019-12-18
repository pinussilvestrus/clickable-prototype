# clickable-prototype

> React Library for creating clickable prototypes

[![NPM](https://img.shields.io/npm/v/clickable-prototype.svg)](https://www.npmjs.com/package/clickable-prototype) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save clickable-prototype
```

## Usage

```jsx
import React, { Component } from 'react'

import { View, HitBox, ViewContainer } from 'clickable-prototype'

import view1 from './views/view1.png'
import view2 from './views/view2.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <ViewContainer defaultView='view1'>
          <View key='view1' screen={view1}>
            <HitBox
              position={{y: 81, x: 644, width: 50, height: 20}}
              to='view2' />
          </View>
          <View key='view2' screen={view2} />
        </ViewContainer>
      </div>
    )
  }
}

```

## License

MIT © [pinussilvestrus](https://github.com/pinussilvestrus)
