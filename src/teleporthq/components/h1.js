import React from 'react'

import PropTypes from 'prop-types'

import './h1.css'

const H1 = (props) => {
  return (
    <div className="h1-container">
      <span className="h1-text">{props.value}</span>
    </div>
  )
}

H1.defaultProps = {
  value: 'Primary Title',
}

H1.propTypes = {
  value: PropTypes.string,
}

export default H1
