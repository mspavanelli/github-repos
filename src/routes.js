import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Repository from './pages/Repository'

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repository" exact component={Repository} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Routes
