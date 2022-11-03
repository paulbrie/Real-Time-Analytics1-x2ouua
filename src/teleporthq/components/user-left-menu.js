import React from 'react'

import PropTypes from 'prop-types'

import './user-left-menu.css'

const UserLeftMenu = (props) => {
  return (
    <div className={`user-left-menu-container ${props.rootClassName} `}>
      <div className="user-left-menu-container1"></div>
      <div className="user-left-menu-container2">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="user-left-menu-image"
        />
        <span className="user-left-menu-text">{props.userName}</span>
        <span className="user-left-menu-text1">{props.email}</span>
      </div>
    </div>
  )
}

UserLeftMenu.defaultProps = {
  email: 'email@email.com',
  userName: 'User Name',
  image_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNjM0NTY5OTQw&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  rootClassName: '',
}

UserLeftMenu.propTypes = {
  email: PropTypes.string,
  userName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default UserLeftMenu
