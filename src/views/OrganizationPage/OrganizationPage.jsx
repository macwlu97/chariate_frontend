import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { userActions, organizationActions } from '../../_actions';
import OutlinedCard from '../../_components/organization/my_org_card';

import Button from '@material-ui/core/Button';

class OrganizationPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(organizationActions.getMyOrganization())
    }

    render() {
        const { user, users, organization } = this.props;
        return (
            
            <React.Fragment>
                <Typography variant="h3" component="h3" align="center" style={{ paddingBottom: 15}}>
                    Zarządzaj swoimi organizacjami 
                </Typography>
                
                {organization.loading && <em>Ładuje uzytkownikow...</em>}
                {organization.error && <span className="text-danger">ERROR: {organization.error}</span>}
                {organization.items &&
                    <ul>
                        {organization.items.results.map((org, index) =>
                            <OutlinedCard name={org.name} description={org.description} type={org.type} type_name={org.type_name} sh_name={org.sh_name} city={org.city}></OutlinedCard>
                        )}
                    </ul>
                }
                
                
                <p>
                    <Link to="/"><Button size="small">powróć</Button></Link>
                </p>

            
            </React.Fragment>


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