
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/atoms/Navbar';
import { LoginScreen } from '../components/Login/LoginScreen';
import { RegisterForm } from '../components/Login/RegisterForm';
import { PasswordReset } from '../components/Login/PasswordReset';
import { DashboardRoutes } from './DashboardRoutes';
export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>

                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterForm} />
                    <Route exact path="/password-reset" component={PasswordReset} />
                    <Route path="/" component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    );
}
