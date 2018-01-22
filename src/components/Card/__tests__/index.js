import 'react-native'
import React from 'react'
import Card from '../'
import { shallow } from 'enzyme'

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card children="Oi" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('deve disparar a função de pressionado', () => {
    const onPress = jest.fn()
    const wrapper = shallow(<Card children="Oi" onPress={onPress} />)
    expect(wrapper).toMatchSnapshot()

    wrapper.simulate('press')

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
