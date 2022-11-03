import React from 'react'

import PropTypes from 'prop-types'

import './button-gray.css'

const ButtonGray = (props) => {
  return (
    <div className={`button-gray-container ${props.rootClassName} `}>
      <span className="button-gray-text">{props.value}</span>
    </div>
  )
}

ButtonGray.defaultProps = {
  rootClassName: '',
  value: 'Button',
}

ButtonGray.propTypes = {
  rootClassName: PropTypes.string,
  value: PropTypes.string,
}

export default ButtonGray
