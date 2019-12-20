# clickable-prototype

> Lightweight React Library for creating clickable Prototypes

[![NPM](https://img.shields.io/npm/v/clickable-prototype.svg)](https://www.npmjs.com/package/clickable-prototype) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/pinussilvestrus/clickable-prototype.svg?branch=master)](https://travis-ci.org/pinussilvestrus/clickable-prototype) ![npm bundle size](https://img.shields.io/bundlephobia/min/clickable-prototype)

[**Demo Page**](https://clickable-prototype.netlify.com/)

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

```

## Development Setup

To set up this project, first clone the repository
```bash
$ git clone https://github.com/pinussilvestrus/clickable prototype
```

Change your working directory into the project directory
```bash
$ cd clickable-prototype
```

Install all dependencies in the library and the [example](./example)

```bash
$ npm install
$ cd example && npm install
```

Run the development server(s)

```bash
$ npm run dev
```

## License

MIT © [pinussilvestrus](https://github.com/pinussilvestrus)
