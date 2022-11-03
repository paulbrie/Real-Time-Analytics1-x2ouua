import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Real Time Analytics1</title>
        <meta property="og:title" content="Real Time Analytics1" />
      </Helmet>
    </div>
  )
}

export default Home
