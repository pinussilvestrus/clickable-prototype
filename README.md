# clickable-prototype ⚠️WIP⚠️

> React Framework for creating clickable prototypes

[![NPM](https://img.shields.io/npm/v/clickable-prototype.svg)](https://www.npmjs.com/package/clickable-prototype) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save clickable-prototype
```

## Usage

```jsx
import React, { Component } from 'react'

import { View, InteractionArea } from 'clickable-prototype'

import view1 from './views/view1.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <View screen={view1}>
          <InteractionArea position={{y: 81, x: 644, width: 50, height: 10}} />
        </View>
      </div>
    )
  }
}

```

## License

MIT © [pinussilvestrus](https://github.com/pinussilvestrus)
