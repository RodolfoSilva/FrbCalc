import React from 'react'
import ReprovadoMessage from '../'
import { shallow } from 'enzyme'

describe('ReprovadoMessage', () => {
  it('Renderiza a mensagem de reprovação', () => {
    const wrapper = shallow(<ReprovadoMessage />)
    expect(wrapper).toMatchSnapshot()
  })
})
