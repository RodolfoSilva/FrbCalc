import React from 'react'
import Notas from '../'
import { shallow } from 'enzyme'

describe('Notas', () => {
  it('Renderiza todas as notas apenas com os placelholders', () => {
    const wrapper = shallow(<Notas />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Renderiza apenas a AP1', () => {
    const wrapper = shallow(<Notas ap1={5} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Renderiza apenas a AP2', () => {
    const wrapper = shallow(<Notas ap2={3} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Renderiza apenas a AP3', () => {
    const wrapper = shallow(<Notas ap3={9} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Renderiza todas as notas', () => {
    const wrapper = shallow(<Notas ap1={4} ap2={7} ap3={5} />)
    expect(wrapper).toMatchSnapshot()
  })
})
