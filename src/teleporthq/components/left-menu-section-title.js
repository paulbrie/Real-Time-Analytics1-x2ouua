import React from 'react'

import PropTypes from 'prop-types'

import './left-menu-section-title.css'

const LeftMenuSectionTitle = (props) => {
  return (
    <div className="left-menu-section-title-container">
      <span className="left-menu-section-title-text">{props.new_prop}</span>
      <span className="left-menu-section-title-text1">{props.subTitle}</span>
    </div>
  )
}

LeftMenuSectionTitle.defaultProps = {
  subTitle: 'Sub-Section',
  new_prop: 'SECTION',
}

LeftMenuSectionTitle.propTypes = {
  subTitle: PropTypes.string,
  new_prop: PropTypes.string,
}

export default LeftMenuSectionTitle
