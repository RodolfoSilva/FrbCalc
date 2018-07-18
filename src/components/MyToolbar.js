import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from 'react-native-material-ui';

class MyToolbar extends PureComponent {
  getActions = () => this.props.rightActions.filter(({ menu }) => !menu);

  getActionByIndex = index => this.getActions()[index];

  getMenu = () => this.props.rightActions.filter(({ menu }) => menu);

  getMenuByIndex = index => this.getMenu()[index];

  getActionsLabels = () => this.getActions().map(({ icon = 'lens' }) => icon);

  getMenuLabels = () => this.getMenu().map(({ label }) => label);

  handleSelect = finder => index => {
    const item = finder(index);
    item && item.onSelect && item.onSelect();
  };

  handleMenuSelect = this.handleSelect(this.getMenuByIndex);
  handleActionSelect = this.handleSelect(this.getActionByIndex);

  handleRightPress = ({ action, result, index }) => {
    if (action === 'menu' && !!result) {
      this.handleMenuSelect(index);
      return;
    }
    this.handleActionSelect(index);
  };

  getRightElementProps = () => {
    const actionsLabels = this.getActionsLabels();
    const menuLabels = this.getMenuLabels();

    if (menuLabels.length === 0) {
      return { actions: actionsLabels };
    }

    return {
      actions: actionsLabels,
      menu: {
        labels: menuLabels
      }
    };
  };

  render() {
    return (
      <Toolbar
        {...this.props}
        rightElement={this.getRightElementProps()}
        onRightElementPress={this.handleRightPress}
      />
    );
  }
}

MyToolbar.propTypes = {
  ...Toolbar.propTypes,
  rightActions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      label: PropTypes.string.isRequired,
      menu: PropTypes.bool,
      onSelect: PropTypes.func
    })
  )
};

export default MyToolbar;
