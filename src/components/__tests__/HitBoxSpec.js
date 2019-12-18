import React from 'react'
import { shallow } from 'enzyme'

import HitBox from '../HitBox'

describe('HitBox', () => {
  it('should render', () => {
    // given
    const position = { x: 0, y: 0, width: 0, height: 0 }

    // then
    shallow(<HitBox position={position} />)
  })

  it('should crash without position', () => {
    expect(() => {
      shallow(<HitBox />)
    }).toThrow()
  })
})
