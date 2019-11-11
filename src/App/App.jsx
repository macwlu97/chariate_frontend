import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { OrganizationPage } from '../OrganizationPage';
import { testpage } from '../testpage';

import './styl.scss';

  

// const classes = useStyles();

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
            // <React.Fragment>
               
            //  </React.Fragment>
            
            // <div className="jumbotron">
                // <div className="container">
                //     <div className="col-sm-8 col-sm-offset-2">
                <div>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute exact path="/test" component={testpage} />
                                <PrivateRoute exact path="/organization" component={OrganizationPage} />
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