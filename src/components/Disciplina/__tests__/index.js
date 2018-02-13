import React from 'react'
import Previsoes from '../Previsoes'
import Notas from '../Notas'
import { Text } from 'react-native'
import Disciplina from '../'
import { shallow } from 'enzyme'

describe('Disciplina', () => {
  it('Deve renderizar a disiciplina', () => {
    const wrapper = shallow(<Disciplina titulo="Cálculo" id="dumb-id" notas={{}} onPress={() => {}} />)
    expect(wrapper.find(Text).first().prop('children')).toEqual('Cálculo')
    expect(wrapper.find(Previsoes).length).toEqual(1)
    expect(wrapper.find(Notas).length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza as notas', () => {
    const wrapper = shallow(<Disciplina titulo="Cálculo" id="dumb-id" notas={{ ap1: 10, ap2: 5, ap3: 3 }} onPress={() => {}} />)
    expect(wrapper.find(Notas).first().prop('ap1')).toEqual(10)
    expect(wrapper.find(Notas).first().prop('ap2')).toEqual(5)
    expect(wrapper.find(Notas).first().prop('ap3')).toEqual(3)
    expect(wrapper).toMatchSnapshot()
  })
})
