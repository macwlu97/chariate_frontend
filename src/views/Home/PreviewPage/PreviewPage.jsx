import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { organizationActions } from '../../../_actions';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import PreviewDescription from '../../../_components/PreviewDescription';
import Divider from '@material-ui/core/Divider';

class PreviewPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          _id: this.props.match.params._id,
          _type: this.props.match.params._type,
        }

        this.props.dispatch(organizationActions.getOrganization(this.state._id));
      }

    render() { //renderowanie warunkowe
        const { organization } = this.props;
        return (
            
            <React.Fragment>
                <Typography variant="h3" component="h3" align="center" style={{ paddingTop: 10, paddingBottom: 20 }}>
                    Przeglądasz: {organization.items && organization.items.name}
                </Typography>
                <Divider light />
            <PreviewDescription/>
        {/* <FormControl disabled >
            <InputLabel htmlFor="component-disabled" spacing={3}>{organization.items && organization.items.name}</InputLabel>
            <Input id="component-disabled" 
        // value={name} onChange={handleChange} 
        />
            <FormHelperText>Nazwa</FormHelperText>
        </FormControl>
         */}
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
                {/* ------------ */}
                <p>
                {/* <React.Button onClick={history.goBack}>Go Back</React.Button> */}
                </p>

            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { authentication, organization } = state;
    const { user } = authentication;
    return {
        user,
        organization,
    };
}

const connectedPreviewPage = connect(mapStateToProps)(PreviewPage);
export { connectedPreviewPage as PreviewPage };