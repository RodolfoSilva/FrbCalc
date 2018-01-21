import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class Card extends PureComponent {
  renderCard() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>{this.props.children}</View>
      </View>
    )
  }

  render() {
    if (!this.props.onClick) {
      return this.renderCard()
    }

    return (
      <TouchableOpacity onPress={() => this.props.onClick()}>
        {this.renderCard()}
      </TouchableOpacity>
    )
  }
}

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Card
