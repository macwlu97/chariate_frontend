import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, organizationActions } from '../../_actions';

// import SimpleBreadcrumbs from '../_components/Bread';





class testpage extends React.Component {
    componentDidMount() {
     
    }

    
    render() {
        return(
    <div>sukces
   
    </div>
        )
    }
}

function mapStateToProps(state) {
    const { users, organization, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        organization
    };
}

const connectedtestpage = connect(mapStateToProps)(testpage);
export { connectedtestpage as testpage };