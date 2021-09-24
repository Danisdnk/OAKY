import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Home } from '../components/Landing/Home'
import { Navbar } from '../components/atoms/Navbar'
import { ChildDashboard } from '../components/ChildDashboard/ChildDashboard'
import { Profile } from '../components/Profile/Profile'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/child-dashboard" component={ChildDashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Redirect to="/home" />
                    {/* <Route exact path="/hero/:heroeId" component={HeroesScreen} /> */}

                </Switch>
            </div>
        </>
    )
}
