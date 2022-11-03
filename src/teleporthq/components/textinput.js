import React from 'react'

import PropTypes from 'prop-types'

import './textinput.css'

const Textinput = (props) => {
  return (
    <div className="textinput-container">
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="input"
      />
    </div>
  )
}

Textinput.defaultProps = {
  textinput_placeholder: 'placeholder',
}

Textinput.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Textinput
