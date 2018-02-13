import React from 'react'
import { Text } from 'react-native'
import Nota from '../'
import { shallow } from 'enzyme'

describe('Nota', () => {
  it('Renderiza o titulo e no lugar da nota coloca _._', () => {
    const wrapper = shallow(<Nota title="AP1" />)
    expect(wrapper.find(Text).first().prop('children')).toEqual('_._')

    expect(wrapper.find(Text).last().prop('children')).toEqual('AP1')
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a nota do usuário', () => {
    const wrapper = shallow(<Nota title="Média" value={5} />)
    expect(wrapper.find(Text).first().prop('children')).toEqual('5')
    expect(wrapper.find(Text).last().prop('children')).toEqual('Média')
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza o titulo e se a nota for null no lugar dela coloca _._', () => {
    const wrapper = shallow(<Nota title="Title" value={null} />)
    expect(wrapper.find(Text).first().prop('children')).toEqual('_._')
    expect(wrapper.find(Text).last().prop('children')).toEqual('Title')
    expect(wrapper).toMatchSnapshot()
  })
})
