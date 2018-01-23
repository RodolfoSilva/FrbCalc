import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class Card extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  renderCard() {
    return <View style={styles.wrapper}>{this.props.children}</View>
  }

  render() {
    if (!this.props.onPress) {
      return (
        <View style={styles.container}>
          {this.renderCard()}
        </View>
      )
    }

    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => this.props.onPress()}>
        {this.renderCard()}
      </TouchableOpacity>
    )
  }
}

export default Card
