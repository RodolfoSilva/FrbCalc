import React from 'react'
import Previsao from '../'
import { shallow } from 'enzyme'

describe('Previsao', () => {
  it('Renderiza a previsão da nota contendo 10', () => {
    const wrapper = shallow(<Previsao value={10} title="Média" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renderiza a previsão da nota com o placeholder', () => {
    const wrapper = shallow(<Previsao value={null} title="Média" />)
    expect(wrapper).toMatchSnapshot()
  })
})
