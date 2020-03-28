import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '../../../utils/routes'

const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component, exact, name }) => (
        <Route component={component} exact={exact} key={name} path={path} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default AppRoute
