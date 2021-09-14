import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Home } from '../components/Landing/Home'
import { Navbar } from '../components/atoms/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component={Home} />
                    {/* <Route exact path="/hero/:heroeId" component={HeroesScreen} /> */}
                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}
