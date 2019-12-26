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

class ProfilePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user } = this.props;
        return (
            
            <React.Fragment>
                <Typography variant="h3" component="h3" align="center">
                    Konto
                </Typography>
                
        <FormControl disabled >
            <InputLabel htmlFor="component-disabled" spacing={3}>{user.name}</InputLabel>
            <Input id="component-disabled" 
        // value={name} onChange={handleChange} 
        />
            <FormHelperText>Nazwa</FormHelperText>
        </FormControl>
        <IconButton m={1}>
            <EditIcon style={{fontSize: '15px'}}/>
        </IconButton>
      {/* <Fab color="secondary" aria-label="edit"  style={{fontSize: '30px'}}>
        <EditIcon style={{fontSize: '10px'}}/>
      </Fab> */}
        {/* <FormControl disabled>
            <InputLabel htmlFor="component-disabled">{user}</InputLabel>
            <Input id="component-disabled" 
        // value={name} onChange={handleChange} 
        />
            <FormHelperText>Imię</FormHelperText>
        </FormControl> */}
                

                {/* {organization.loading && <em>Ładuje uzytkownikow...</em>}
                {organization.error && <span className="text-danger">ERROR: {organization.error}</span>}
                {organization.items &&
                    <ul>
                        {organization.items.results.map((org, index) =>
                            <li key={org.id}>
                                {org.name + ' ' + org.description}
                            </li>
                        )}
                    </ul>
                } */}
                <br/><br/><br/><br/><br/><br/><br/>
                ------------
                <p>
                    <Link to="/">powróć</Link>
                </p>

            
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