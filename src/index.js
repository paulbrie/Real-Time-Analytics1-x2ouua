import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'
import DS from './teleporthq/pages/d-s'
import Home from './teleporthq/pages/home'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route component={DS} exact path="/d-s" />
        <Route component={Home} exact path="/" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
