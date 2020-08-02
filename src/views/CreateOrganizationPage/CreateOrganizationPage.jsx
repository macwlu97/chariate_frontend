import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { userActions, organizationActions } from '../../_actions';
import VerticalLinearStepper from '../../_components/forms/organization/organizationStepper';
import Grid from '@material-ui/core/Grid';

class CreateOrganizationPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(organizationActions.getAllOrganization())
    }

    render() {
        const { user, users, organization } = this.props;
        return (
            
            <React.Fragment>
                <Typography variant="h3" component="h3" align="center">
                    Utwórz organizację
                </Typography>
                <Grid container direction="row">
                    <Grid item md={5}></Grid>
                    <Grid item md={4}>
                        <VerticalLinearStepper></VerticalLinearStepper>
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
            

            
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

const connectedCreateOrganizationPage = connect(mapStateToProps)(CreateOrganizationPage);
export { connectedCreateOrganizationPage as CreateOrganizationPage };