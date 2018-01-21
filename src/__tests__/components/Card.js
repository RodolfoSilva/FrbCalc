import 'react-native'
import React from 'react'
import Card from '../../components/Card'
import { shallow } from 'enzyme'

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card children="Oi" />)
    expect(wrapper).toMatchSnapshot()
  })
})
