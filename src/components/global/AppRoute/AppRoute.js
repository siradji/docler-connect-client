import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '../../../utils/routes'
import PrivateRoute from '../../../routing/PrivateRoute'
import Home from '../../../pages/home'

const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component }) => (
        <PrivateRoute component={component} path={path} />
      ))}
      <Route exact path="/" component={Home} />
    </Switch>
    e
  </BrowserRouter>
)

export default AppRoute
