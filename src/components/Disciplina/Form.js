import React, { Fragment } from 'react';
import { TextField } from 'react-native-material-textfield';

const Nota = props => <TextField {...props} keyboardType="numeric" />;

const DisciplinaForm = ({ values, errors, onChange }) => (
  <Fragment>
    <TextField
      label="Nome da disciplina"
      value={values.name}
      onChangeText={value => onChange({ name: 'name', value })}
      error={errors.name}
    />
    <Nota
      label="Nota da AP1"
      value={values.ap1}
      onChangeText={value => onChange({ name: 'ap1', value })}
      error={errors.ap1}
    />
    <Nota
      label="Nota da AP2"
      value={values.ap2}
      onChangeText={value => onChange({ name: 'ap2', value })}
      error={errors.ap2}
    />
    <Nota
      label="Nota da AP3"
      value={values.ap3}
      onChangeText={value => onChange({ name: 'ap3', value })}
      error={errors.ap3}
    />
  </Fragment>
);

export default DisciplinaForm;
