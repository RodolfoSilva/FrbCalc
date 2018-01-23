import 'react-native'
import React from 'react'
import Nota from '../'
import { shallow } from 'enzyme'

describe('Card', () => {
  it('Renderiza o titulo e no lugar da nota coloca _._', () => {
    const wrapper = shallow(<Nota title="AP1" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renderiza a nota do usuário', () => {
    const wrapper = shallow(<Nota title="AP1" value={5} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza o titulo e se a nota for null no lugar dela coloca _._', () => {
    const wrapper = shallow(<Nota title="AP1" value={null} />)
    expect(wrapper).toMatchSnapshot()
  })
})
