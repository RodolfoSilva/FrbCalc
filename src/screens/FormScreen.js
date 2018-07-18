import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';

import Form from '../components/Disciplina/Form';
import { Toolbar } from 'react-native-material-ui';
import * as yup from 'yup';
import fromPairs from 'lodash/fromPairs';
import toPairs from 'lodash/toPairs';
import isNull from 'lodash/isNull';
import isNumber from 'lodash/isNumber';
import trim from 'lodash/trim';
import {
  disciplinasSelectors,
  disciplinasOperations
} from '../state/ducks/disciplinas';

const ACTION_REMOVE = 'delete';
const ACTION_SAVE = 'check';

const validationNotaSchema = yup
  .number()
  .transform(
    (currentValue, originalValue) =>
      trim(originalValue) === '' ? null : currentValue
  )
  .nullable(true)
  .typeError('A nota deve ser um número')
  .positive('A nota deve ser maior ou igual a 0')
  .max(10, 'A nota deve ser menor ou igual a 10');

const validationSchema = yup.object().shape({
  name: yup.string().required('Insira o nome da disciplina'),
  ap1: validationNotaSchema,
  ap2: validationNotaSchema,
  ap3: validationNotaSchema
});

const transformValues = obj =>
  fromPairs(
    toPairs(obj).map(([key, value]) => [
      key,
      isNull(value) ? '' : isNumber(value) ? value.toString() : value
    ])
  );

class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      values: {
        name: '',
        ap1: '',
        ap2: '',
        ap3: ''
      },
      editing: false,
      errors: {}
    };

    const { item } = props;
    this.state = initialState;
    if (item) {
      this.state = {
        ...initialState,
        values: { ...initialState.values, ...item },
        editing: true
      };
    }
  }

  validate = values => {
    return validationSchema
      .validate(values, { abortEarly: false })
      .then(result =>
        this.setState({ errors: {}, values: transformValues(result) })
      )
      .catch(error => {
        const errors = error.inner.reduce((messages, error) => {
          if (!messages[error.path]) {
            messages[error.path] = error.message;
          }
          return messages;
        }, {});

        this.setState({ errors, values });

        throw errors;
      });
  };

  handleChange = async ({ name, value }) => {
    try {
      await this.validate({
        ...this.state.values,
        [name]: value.replace(',', '.')
      });
    } catch (error) {
      console.log('Error', error);
    }
  };

  handleSave = async () => {
    try {
      await this.validate(this.state.values);

      if (this.state.editing) {
        this.props.onUpdate(this.state.values);
        this.props.navigation.goBack();
        return;
      }
      this.props.onCreate(this.state.values);
      this.props.navigation.goBack();
    } catch (error) {}
  };

  handleRemove = () => {
    const { item } = this.props;
    Alert.alert(
      'Apagar disciplina',
      `Você tem certeza que deseja apagar a disciplina "${item.name}"?`,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => {
            ToastAndroid.show(
              `A disciplina "${item.name}" foi excluída!`,
              ToastAndroid.SHORT
            );
            this.props.onRemove(item);
            this.props.navigation.goBack();
          }
        }
      ],
      { cancelable: false }
    );
  };

  handleRightPress = ({ action }) => {
    switch (action) {
      case ACTION_SAVE:
        this.handleSave();
        break;
      case ACTION_REMOVE:
        this.handleRemove();
        break;
    }
  };

  getActions = () => {
    const actions = [ACTION_SAVE];

    if (this.state.editing) {
      actions.push(ACTION_REMOVE);
    }

    return actions.reverse();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.goBack()}
          centerElement="Disciplina"
          rightElement={this.getActions()}
          onRightElementPress={this.handleRightPress}
        />
        <ScrollView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            style={{ paddingHorizontal: 8 }}
            behavior="padding"
            enabled
          >
            <Form
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.handleChange}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state, { navigation }) => {
  return {
    item: disciplinasSelectors.getById(state)(navigation.getParam('itemId'))
  };
};
const mapDispatchToProps = {
  onCreate: disciplinasOperations.createDisciplina,
  onRemove: disciplinasOperations.removeDisciplina,
  onUpdate: disciplinasOperations.updateDisciplina
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormScreen);
