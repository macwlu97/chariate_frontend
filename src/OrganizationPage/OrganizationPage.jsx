import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, organizationActions } from '../_actions';



class OrganizationPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(organizationActions.getAll())
    }

    render() {
        const { user, users, organization } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Witaj {user.name}!</h1>
                <p>Zostałeś zalogowany w systemie</p>
                {organization.loading && <em>Ładuje uzytkownikow...</em>}
                {organization.error && <span className="text-danger">ERROR: {organization.error}</span>}
                {organization.items &&
                    <ul>
                        {organization.items.results.map((org, index) =>
                            <li key={org.id}>
                                {org.name + ' ' + org.description}
                            </li>
                        )}
                    </ul>
                }
                ------------
                <p>
                    <Link to="/">powróć</Link>
                </p>

            
            </div>


        );
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

const connectedOrganizationPage = connect(mapStateToProps)(OrganizationPage);
export { connectedOrganizationPage as OrganizationPage };