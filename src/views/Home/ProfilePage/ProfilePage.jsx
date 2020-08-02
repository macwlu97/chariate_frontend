import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import { userActions, organizationActions } from '../../_actions';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ProfileForm from '../../../_components/user/ProfileForm';
import Box from '@material-ui/core/Box';

class ProfilePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user } = this.props;
        return (
            
            <React.Fragment>
                <Grid container>
                <Grid item md={12} align="center">
                <Typography variant="h3" component="h3">
                    Ustawienia konta
                </Typography>
                <Box my={3}/>
                <ProfileForm userInfo={user}/>
                <Box my={3}/>
                    <Link to="/">POWRÓĆ</Link>
                </Grid>
                </Grid>
            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user,
    };
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };