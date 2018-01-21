import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Card from '../../src/components/Card'
import CenterView from './CenterView'

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('inicial', () => <Card />)
  .add('com um texto', () => <Card><Text>Hello World</Text></Card>)
  .add('recebendo click', () => <Card onPress={action('clicked-card')}><Text>Hello World</Text></Card>)
