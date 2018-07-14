import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-material-ui';
import memoize from 'lodash/memoize';

const openUrlOnCall = memoize(url => () => Linking
  .openURL(url)
  .catch(err => console.error('An error occurred', err))
);

const Link = ({ url, onPress, ...rest }) => (
  <Button {...rest} onPress={openUrlOnCall(url)} />
);

export default Link;
