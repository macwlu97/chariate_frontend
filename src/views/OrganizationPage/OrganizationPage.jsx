import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { userActions, organizationActions } from '../../_actions';
import OutlinedCard from '../../_components/organization/my_org_card';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class OrganizationPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(organizationActions.getMyOrganization())
    }

      
    render() {
        const { user, users, organization } = this.props;

        let organizationCount;
        organizationCount = organization.items && organization.items.results ? organization.items.results.length : 0;

        return (
            
            <React.Fragment>
                <Typography variant="h3" component="h3" align="center" style={{ paddingBottom: 15}}>
                    Zarządzaj swoimi organizacjami 
                </Typography>
                
                {organization.loading && <em>Ładuje organizacje...</em>}
                {organization.error && <span className="text-danger">ERROR: {organization.error}</span>}
                {organization.items &&
                    <ul>
                        {organization.items.results.map((org, index) =>
                            <OutlinedCard org_id={org.id} name={org.name} description={org.description} type={org.type} type_name={org.type_name} sh_name={org.sh_name} city={org.city}></OutlinedCard>
                        )}
                    </ul>
                }

                {organizationCount === 0 && <Box my={2}><ListItem>Brak organizacji.</ListItem></Box>}
                
                
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