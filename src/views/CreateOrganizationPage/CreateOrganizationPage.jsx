import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { userActions, organizationActions } from '../../_actions';
import VerticalLinearStepper from '../../_components/forms/organization/organizationStepper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class CreateOrganizationPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(organizationActions.getAllOrganization())
    }

    render() {
        const { user, users, organization } = this.props;
        return (
            
            <React.Fragment>
                <Grid container direction="row">
                    <Grid item md={6}>
                        <Box m={2}>
                        <Typography variant="h3" component="h3" align="center">
                            Tworzenie organizacji
                        </Typography>
                        </Box>
                        <Box m={2}>
                        <Typography variant="h5" component="h6" align="center">
                            Prosimy, wypełnij widoczny po prawej stronie formularz.
                            Jest on podzielony na 3 kroki. Pierwszy krok to wybór rodzaju dzałalności.
                            Wybranie fundacji powoduje automatyczne zweryfikowanie działalności. Natomiast
                            wybór społeczności, powoduje utworzenie grupy działającej w dobrej sprawie.
                            Następny krok to uzupełnienie najważniejszych informacji o działalności, których
                            prawdziwość potwierdzami w ostatnim kroku.
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <VerticalLinearStepper></VerticalLinearStepper>
                    </Grid>
                    <Link to="/">POWRÓĆ</Link>
                    {/* <Grid item md={3}></Grid> */}
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