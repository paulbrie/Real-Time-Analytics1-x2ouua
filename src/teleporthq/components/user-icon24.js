import React from 'react'

import PropTypes from 'prop-types'

import './user-icon24.css'

const UserIcon24 = (props) => {
  return (
    <div className={`user-icon24-container ${props.rootClassName} `}>
      <img alt={props.alt} src={props.src} className="user-icon24-image" />
    </div>
  )
}

UserIcon24.defaultProps = {
  rootClassName: '',
  src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHVzZXJ8ZW58MHx8fHwxNjM0NTY5OTQw&ixlib=rb-1.2.1&h=200',
  alt: 'image',
}

UserIcon24.propTypes = {
  rootClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default UserIcon24
