import React from 'react'
import { Text } from 'react-native'
import Nota from '../'
import { shallow } from 'enzyme'

describe('Card', () => {
  it('Renderiza o titulo e no lugar da nota coloca _._', () => {
    const wrapper = shallow(<Nota title="AP1" />)
    expect(wrapper.find(Text).first().props().children).toEqual('_._')

    expect(wrapper.find(Text).last().props().children).toEqual('AP1')
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a nota do usuário', () => {
    const wrapper = shallow(<Nota title="Média" value={5} />)
    expect(wrapper.find(Text).first().props().children).toEqual('5')
    expect(wrapper.find(Text).last().props().children).toEqual('Média')
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza o titulo e se a nota for null no lugar dela coloca _._', () => {
    const wrapper = shallow(<Nota title="Title" value={null} />)
    expect(wrapper.find(Text).first().props().children).toEqual('_._')
    expect(wrapper.find(Text).last().props().children).toEqual('Title')
    expect(wrapper).toMatchSnapshot()
  })
})
