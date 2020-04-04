/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//  private routes. will redirect to the homepage is there's no username in the state

const PrivateRoute = ({ component: Component, chat: { isLoggedIn }, ...rest }) => (
  <Route
    {...rest}
    render={props => (!isLoggedIn ? <Redirect to="/" /> : <Component {...props} />)}
  />
)

const mapStateToProps = state => ({
  chat: state.chat,
})

export default connect(mapStateToProps)(PrivateRoute)
