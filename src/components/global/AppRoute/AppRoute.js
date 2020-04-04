import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from '../../../utils/routes'
import PrivateRoute from '../../../routing/PrivateRoute'
import Home from '../../../pages/home'

//  declaring routes
const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PrivateRoute component={component} path={path} key={index} />
      ))}
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default AppRoute
