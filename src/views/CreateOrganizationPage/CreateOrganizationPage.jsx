import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { userActions, organizationActions } from '../../_actions';
import VerticalLinearStepper from '../../_components/forms/organization/organizationStepper';


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
                
            <VerticalLinearStepper></VerticalLinearStepper>

            
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