import React from 'react'
import {Switch, Route } from 'react-router-dom'
import AllUsers from './components/cardcomponent/Allusers'
import FemaleUser from './components/cardcomponent/Femaleuser'
import MaleUser from './components/cardcomponent/Maleusers'
import SingleUser from './components/singleUser/singleUser'

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllUsers}/>
      <Route path="/male" component={MaleUser} />
      <Route path="/female" component={FemaleUser} />
      <Route path="/:logusername" component={SingleUser} />
    </Switch>
  )
}

export default BaseRouter
