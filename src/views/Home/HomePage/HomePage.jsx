import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, organizationActions } from '../../../_actions';



class HomePage extends React.Component {
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
                {users.loading && <em>Ładuje uzytkownikow...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.results.map((user, index) =>
                            <li key={user.id}>
                                {user.first_name + ' ' + user.last_name}
                            </li>
                        )}
                    </ul>
                }
                ------------
                <p>
                    <Link to="/organization">Organizacje</Link>
                </p>
                <p>
                    <Link to="/login">Wyloguj</Link>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };