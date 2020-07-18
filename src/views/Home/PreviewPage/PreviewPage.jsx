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
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';


class PreviewPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          _id: this.props.match.params._id,
        //   _type: this.props.match.params._type,
        }

        this.props.dispatch(organizationActions.getOrganization(this.state._id));
      }
    
    render() { //renderowanie warunkowe
        const { organization } = this.props;
        let isNotUndefinedTypeOfCoverImage;
        let isCoverImageNotNull;
        
        isNotUndefinedTypeOfCoverImage = (organization.items && typeof(organization.items.file_type) !== "undefined") ? true:false;
        isCoverImageNotNull = (organization.items && organization.items.file_type !== null) ? true:false;

        return (
            
            <React.Fragment>
                <Typography variant="h4" component="h3" align="center" style={{ paddingTop: 10, paddingBottom: 20 }}>
                    {organization.items && organization.items.name}
                </Typography>
                {(isNotUndefinedTypeOfCoverImage && isCoverImageNotNull) && 
                <Box component="span" m={1}>
                <CardMedia
                component="img"
                image={`data:${organization.items && organization.items.file_type};base64,${organization.items && atob(organization.items.logo)}`}
                title="Logo organizacji"
                height={200}
                /></Box>
                }
                 <Divider light />
            <PreviewDescription organization={organization}/>
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
                {/* <br/><br/><br/><br/><br/><br/><br/> */}
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