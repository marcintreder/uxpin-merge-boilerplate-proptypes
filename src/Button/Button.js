import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './Button.styles';

const Button = (props) => (
  <ButtonStyles {...props}>
    {props.icon}
    {props.children}
  </ButtonStyles>
);

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
  mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
  title: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  stretched: PropTypes.bool,
  children: PropTypes.string,
  icon: PropTypes.node,
  iconDirection: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  iconDirection: 'left',
  mode: 'filled',
  size: 'm',
  stretched: true,
  type: 'primary',
};

export { Button as default };
