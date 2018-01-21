import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { TextField } from 'react-native-material-textfield'
import isEmpty from 'lodash/isEmpty'
import isNumber from 'lodash/isNumber'

class DisciplinaForm extends Component {
  static propTypes = {
    initialState: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    style: View.propTypes.style
  }

  constructor(props) {
    super(props)

    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.doSubmit = this.doSubmit.bind(this)

    this.tituloRef = this.updateRef.bind(this, 'titulo')
    this.ap1Ref = this.updateRef.bind(this, 'ap1')
    this.ap2Ref = this.updateRef.bind(this, 'ap2')
    this.ap3Ref = this.updateRef.bind(this, 'ap3')
    this.state = {
      titulo: '',
      notas: {
        ap1: '',
        ap2: '',
        ap3: ''
      },
      ...this.props.initialState
    }

    if (!isEmpty(this.state.notas)) {
      Object.keys(this.state.notas)
        .filter((key) => isNumber(this.state.notas[key]))
        .forEach((key) => {
          this.state.notas[key] = this.state.notas[key].toString()
        })
      Object.keys(this.state.notas)
        .filter((key) => this.state.notas[key] === null)
        .forEach((key) => {
          this.state.notas[key] = ''
        })
    }
  }

  updateRef(name, ref) {
    this[name] = ref
  }

  onFocus() {
    const { errors = {} } = this.state
    for (let name in errors) {
      let ref = this[name]

      if (ref && ref.isFocused()) {
        delete errors[name]
      }
    }

    this.setState({ errors })
  }

  fieldIsRequired(fieldName, error) {
    let value = this[fieldName].value()

    if (value !== '') return

    return error
  }

  onBlur(fieldName) {
    const { errors = {} } = this.state
    if (fieldName === 'titulo') errors.titulo = this._validateTitulo()

    if (['ap1', 'ap2', 'ap3'].includes(fieldName)) errors[fieldName] = this._validateNota(fieldName)

    this.setState({ errors })
  }

  _validateTitulo() {
    return this.fieldIsRequired('titulo', 'Insira o nome da disciplina')
  }

  _validateNota(fieldName) {
    let value = this[fieldName].value()

    if (value === '') return

    value = parseFloat(value)

    if (value < 0 || value > 10) return 'Nota inválida, insira uma nota entre 0.1 e 10'
  }

  validateFields() {
    let errors = {

    }
    const titulo = this._validateTitulo()
    if (titulo) errors.titulo = titulo

    for (let i = 1; i <= 3; i++) {
      let fieldName = `ap${i}`
      const nota = this._validateNota(fieldName)
      if (nota) errors[fieldName] = nota
    }

    this.setState({ errors })

    return isEmpty(errors)
  }

  doSubmit() {
    if (!this.validateFields()) return
    const { titulo, notas } = this.state

    this.props.onSubmit({ titulo, notas: { ...notas } })
  }

  render() {
    const { errors = {}, titulo, notas = {} } = this.state

    return (
      <View style={this.props.style}>

        <TextField
          ref={this.tituloRef}
          label='Disciplina'
          value={titulo}
          error={errors.titulo}
          onBlur={() => this.onBlur('titulo')}
          onFocus={this.onFocus}
          onSubmitEditing={this.onSubmitFirstName}
          onChangeText={(titulo) => this.setState({ titulo })}
        />

        <TextField
          ref={this.ap1Ref}
          label='Nota da AP1'
          keyboardType="numeric"
          value={notas.ap1}
          onBlur={() => this.onBlur('ap1')}
          onFocus={this.onFocus}
          error={errors.ap1}
          onChangeText={(ap1) => this.setState((prevState) => ({ notas: { ...prevState.notas, ap1 } }))}
        />

        <TextField
          ref={this.ap2Ref}
          label='Nota da AP2'
          value={notas.ap2}
          keyboardType="numeric"
          onBlur={() => this.onBlur('ap2')}
          onFocus={this.onFocus}
          error={errors.ap2}
          onChangeText={(ap2) => this.setState((prevState) => ({ notas: { ...prevState.notas, ap2 } }))}
        />

        <TextField
          ref={this.ap3Ref}
          label='Nota da AP3'
          value={notas.ap3}
          keyboardType="numeric"
          onBlur={() => this.onBlur('ap3')}
          onFocus={this.onFocus}
          error={errors.ap3}
          onChangeText={(ap3) => this.setState((prevState) => ({ notas: { ...prevState.notas, ap3 } }))}
        />
      </View>
    )
  }
}

export default DisciplinaForm
