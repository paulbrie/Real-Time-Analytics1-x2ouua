import React from 'react'

import PropTypes from 'prop-types'

import './button-dark.css'

const ButtonDark = (props) => {
  return (
    <div className={`button-dark-container ${props.rootClassName} `}>
      <span className="button-dark-text">{props.value}</span>
    </div>
  )
}

ButtonDark.defaultProps = {
  rootClassName: '',
  text: 'Text',
  value: 'Button',
}

ButtonDark.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
}

export default ButtonDark
