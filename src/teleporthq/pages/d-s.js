import React from 'react'

import { Helmet } from 'react-helmet'

import UserLeftMenu from '../components/user-left-menu'
import ButtonDark from '../components/button-dark'
import LeftMenuSectionTitle from '../components/left-menu-section-title'
import BurgerMenu24 from '../components/burger-menu24'
import H1 from '../components/h1'
import ButtonGray from '../components/button-gray'
import UserIcon24 from '../components/user-icon24'
import './d-s.css'

const DS = (props) => {
  return (
    <div className="d-s-container">
      <Helmet>
        <title>DS - Real Time Analytics1</title>
        <meta property="og:title" content="DS - Real Time Analytics1" />
      </Helmet>
      <div className="d-s-left-sidebar left-menu">
        <UserLeftMenu></UserLeftMenu>
        <div className="d-s-container01">
          <ButtonDark text="Log out"></ButtonDark>
        </div>
        <LeftMenuSectionTitle></LeftMenuSectionTitle>
        <div className="menu-item-container menu-item-container-selected">
          <img
            alt="image"
            src="3ad21bde-afb2-4c77-8b85-5eeed1639ca3"
            className="menu-item-icon"
          />
          <span>Menu Item Selected</span>
        </div>
        <div className="d-s-container03 menu-item-container">
          <img
            alt="image"
            src="/playground_assets/fire.png"
            className="d-s-image1"
          />
          <span className="d-s-text01">Menu Item</span>
        </div>
        <div className="menu-item-container">
          <img
            alt="image"
            src="/playground_assets/fire.png"
            className="d-s-image2"
          />
          <span className="d-s-text02">Menu Item</span>
        </div>
      </div>
      <div className="d-s-center">
        <div className="d-s-container05">
          <div className="center-column">
            <div className="d-s-top-bar top-bar">
              <BurgerMenu24></BurgerMenu24>
            </div>
            <div className="main">
              <H1></H1>
              <span className="d-s-text03">Sub-title Lorem Ipsum</span>
              <div className="d-s-container07">
                <span className="d-s-text04">Component: BurgerMenu</span>
                <BurgerMenu24></BurgerMenu24>
              </div>
              <span className="d-s-text05">
                Classes: .card, .card-top, .card-title, .card-subtitle,
                .card-body
              </span>
              <div className="card">
                <div className="d-s-card-title card-top">
                  <h2 className="card-title">Primary Title</h2>
                  <h3 className="card-subtitle">
                    <span>Sub-title Lorem Ipsum</span>
                  </h3>
                </div>
                <div className="d-s-card-container card-body">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      checked="true"
                      className="d-s-checkbox checkbox-btn"
                    />
                    <span className="checkbox-text">auto-update</span>
                  </div>
                  <div className="card-body">
                    <div className="thead">
                      <span className="thead-text">ID</span>
                      <span className="d-s-text11 thead-text">
                        Width/Height
                      </span>
                      <span className="d-s-text12 thead-text">Email</span>
                      <span className="d-s-text13 thead-text">URL</span>
                      <span className="d-s-text14 thead-text">Location</span>
                      <span className="d-s-text15 thead-text">Message</span>
                    </div>
                    <div className="d-s-tbody">
                      <div className="trow">
                        <span>1234567</span>
                        <span>1234567</span>
                        <span>123456/123456</span>
                        <span>Width</span>
                        <span>Height</span>
                        <span>message</span>
                      </div>
                      <div className="trow">
                        <span>1234567</span>
                        <span>1234567</span>
                        <span>123456/123456</span>
                        <span>Width</span>
                        <span>Height</span>
                        <span>message</span>
                      </div>
                      <div className="trow">
                        <span>1234567</span>
                        <span>1234567</span>
                        <span>123456/123456</span>
                        <span>Width</span>
                        <span>Height</span>
                        <span>message</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="d-s-text34">
                Buttons: ButtonDark, ButtonGrey
              </span>
              <div>
                <ButtonDark rootClassName="button-dark-root-class-name"></ButtonDark>
                <ButtonGray rootClassName="button-gray-root-class-name"></ButtonGray>
              </div>
              <span className="d-s-text35">
                Progress Bar: .progress-bar, .progress-bar-value
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="d-s-container09">
                <div className="d-s-card1 card">
                  <div className="d-s-card-title1 card-top">
                    <h2 className="card-title">Online Users</h2>
                    <h3 className="card-subtitle">
                      <span>last 15 min</span>
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="d-s-container10 big-number-container">
                      <span className="big-number">72</span>
                    </div>
                  </div>
                </div>
                <div className="d-s-card2 card">
                  <div className="d-s-card-title2 card-top">
                    <h2 className="card-title">Events Today</h2>
                    <h3 className="card-subtitle">
                      <span>since 0:00 UTC</span>
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="big-number-container">
                      <span className="d-s-text43 big-number">72</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="d-s-text44">
                Progress Bar: .progress-bar, .progress-bar-value
              </span>
              <div className="progress-bar">
                <div className="progress-bar-value"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-sidebar-menu">
        <UserIcon24></UserIcon24>
        <UserIcon24 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTYzNDU2OTk0MA&amp;ixlib=rb-1.2.1&amp;h=200"></UserIcon24>
        <UserIcon24 src="https://images.unsplash.com/photo-1543278732-824a807df8bd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHx1c2VyfGVufDB8fHx8MTYzNDU2OTk0MA&amp;ixlib=rb-1.2.1&amp;h=200"></UserIcon24>
      </div>
      <div className="right-sidebar-container">
        <div className="right-sidebar-top">
          <div className="right-sidebar-top-left">
            <img
              alt="image"
              src="f1a8337b-0e0b-434b-a4fa-272ae116bebe"
              className="right-sidebar-top-image"
            />
            <h1 className="right-sidebar-top-heading">Username</h1>
          </div>
          <svg viewBox="0 0 1024 1024" className="right-sidebar-top-button">
            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </div>
        <div className="right-sidebar-messages-container"></div>
        <div className="right-sidebar-send-container">
          <input
            type="text"
            placeholder="placeholder"
            className="input right-sidebar-send-input"
          />
          <svg viewBox="0 0 1024 1024" className="right-sidebar-send-btn">
            <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DS
