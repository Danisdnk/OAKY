
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/atoms/Navbar';
import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
export const AppRouter = () => {
    return (
        <Router>
            <div>
        
                <Switch>

                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    );
}
