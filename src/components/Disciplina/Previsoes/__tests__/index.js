import React from 'react'
import Previsoes from '../'
import Previsao from '../../Previsao'
import ReprovadoMessage from '../../ReprovadoMessage'
import { shallow } from 'enzyme'

describe('Previsoes', () => {
  it('Renderiza somente a view se todas as notas estivereme em branco', () => {
    const wrapper = shallow(<Previsoes notas={{ ap1: null, ap2: null, ap3: null }} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a média final', () => {
    const wrapper = shallow(<Previsoes notas={{ ap1: 0, ap2: 0, ap3: 0 }} />)
    expect(wrapper.find(Previsao).first().prop('title')).toEqual('Média final')
    expect(wrapper.find(Previsao).first().prop('value')).toEqual(0)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a mensagem de reprovação', () => {
    const wrapper = shallow(<Previsoes notas={{ ap1: 0, ap2: 0, ap3: null }} />)
    expect(wrapper.find(Previsao).length).toEqual(0)
    expect(wrapper.find(ReprovadoMessage).length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a previsão para AP1', () => {
    const wrapper = shallow(<Previsoes notas={{ ap1: null, ap2: 5, ap3: 5 }} />)
    expect(wrapper.find(Previsao).first().prop('title')).toEqual('Necessário tirar na AP1')
    expect(wrapper.find(Previsao).first().prop('value')).toEqual(5)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a previsão para AP2', () => {
    const wrapper = shallow(<Previsoes notas={{ ap1: 5, ap2: null, ap3: 5 }} />)
    expect(wrapper.find(Previsao).first().prop('title')).toEqual('Necessário tirar na AP2')
    expect(wrapper.find(Previsao).first().prop('value')).toEqual(5)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a previsão para AP3', () => {
    const wrapper = shallow(<Previsoes notas={{ ap1: 5, ap2: 5, ap3: null }} />)
    expect(wrapper.find(Previsao).first().prop('title')).toEqual('Necessário tirar na AP3')
    expect(wrapper.find(Previsao).first().prop('value')).toEqual(5)
    expect(wrapper).toMatchSnapshot()
  })
})
