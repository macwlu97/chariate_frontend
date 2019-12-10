import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../views/Home/HomePage';
import { LoginPage } from '../views/AuthorizationSystem/LoginPage';
import { RegisterPage } from '../views/AuthorizationSystem/RegisterPage';
import { OrganizationPage } from '../views/OrganizationPage';

import CustomizedDialogs from '../_components/CustomizedDialogs';
import HomePageLayout from '../Layouts/HomePageLayout/HomePageLayout';

import { testpage } from '../views/testpage';

import './styl.scss';
import PrimaryLayout from '../Layouts/PrimaryLayout/PrimaryLayout';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    
    render() {
        const { alert } = this.props;
        
        return (
                <div>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }

                        {alert.message == "Registration successful" &&
                            <CustomizedDialogs _title="Zarejestrowano" _content="Pomyślnie zarejestrowałeś się na Chariate.com gratulujemy!" _button_text="Zaloguj się"/>
                        }
                        <Router history={history}>
                            <div>
                                
                                <PrivateRoute exact path="/" layout={HomePageLayout} component={HomePage} />
                                {/* <Blog> */}
                                <PrivateRoute exact path="/test" layout={PrimaryLayout} component={testpage} />
                                <PrivateRoute exact path="/search" layout={PrimaryLayout} component={testpage} />
                                <PrivateRoute exact path="/organization" layout={PrimaryLayout} component={OrganizationPage} />
                                {/* </Blog> */}
                                {/* <Main> */}
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                {/* </Main> */}
                            </div>
                        </Router>
                </div>
              
        );
    }
}


function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 