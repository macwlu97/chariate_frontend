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
import { CreateOrganizationPage } from '../views/CreateOrganizationPage';
import { SearchPage } from '../views/SearchPage';

import CustomizedDialogs from '../_components/CustomizedDialogs';
import HomePageLayout from '../Layouts/HomePageLayout/HomePageLayout';

import { testpage } from '../views/testpage';

// import './styl.scss';
import PrimaryLayout from '../Layouts/PrimaryLayout/PrimaryLayout';
import SearchLayout from '../Layouts/SearchLayout/SearchLayout';
import { ProfilePage } from '../views/Home/ProfilePage/ProfilePage';
import { PreviewPage } from '../views/Home/PreviewPage/PreviewPage';

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
                        {alert.message == "Organization successful" &&
                            <CustomizedDialogs _title="Dodawanie" _content="Pomyślnie dodałeś organizację na Chariate.com gratulujemy!" _button_text="Ok"/>
                        }
                        {alert.message == "Event successful" &&
                            <CustomizedDialogs _title="Dodawanie wydarzenia" _content="Pomyślnie dodałeś wydarzenie na Chariate.com gratulujemy!" _button_text="Ok"/>
                        }
                        {alert.message == "Fundraiser successful" &&
                            <CustomizedDialogs _title="Dodawanie zbiórki" _content="Pomyślnie dodałeś zbiórkę na Chariate.com gratulujemy!" _button_text="Ok"/>
                        }
                        {alert.message == "Information successful" &&
                            <CustomizedDialogs _title="Dodawanie informacji" _content="Pomyślnie dodałeś informację o organizacji na Chariate.com gratulujemy!" _button_text="Ok"/>
                        }
                        {alert.message == "error form field" &&
                            <CustomizedDialogs _title="Błędne dane" _content="Prosimy abyś wypełnił poprawnie formularz. :)" _button_text="Ok"/>
                        }
                        <Router history={history}>
                            <div>
                                
                                <PrivateRoute exact path="/" layout={HomePageLayout} component={HomePage} />
                                
                                <PrivateRoute exact path="/test" layout={PrimaryLayout} component={testpage} />
                                {/* <PrivateRoute path="/search/:cityId,:type,:text,:_sort" layout={SearchLayout} component={SearchPage} /> */}
                                <PrivateRoute path="/search/" layout={SearchLayout} component={SearchPage} />

                                <PrivateRoute exact path="/create_organization" layout={PrimaryLayout} component={CreateOrganizationPage} />
                                <PrivateRoute exact path="/organization" layout={PrimaryLayout} component={OrganizationPage} />
                                <PrivateRoute exact path="/profile" layout={PrimaryLayout} component={ProfilePage} />
                                <PrivateRoute exact path="/preview/:_type,:_id" layout={PrimaryLayout} component={PreviewPage} />

                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                
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