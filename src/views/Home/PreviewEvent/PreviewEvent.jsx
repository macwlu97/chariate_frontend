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
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import CoverImage from '../../../_components/CoverImage';

class PreviewEvent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          _id: this.props.match.params._id,
        //   _type: this.props.match.params._type,
        }

        this.props.dispatch(organizationActions.getEvent(this.state._id));
        this.props.dispatch(organizationActions.getAllEventInformation(this.state._id));
      }
    
    render() { //renderowanie warunkowe
        const { event, information } = this.props;
        let isNotUndefinedTypeOfCoverImage;
        let isCoverImageNotNull;
        let type; 

        // isNotUndefinedTypeOfCoverImage = (organization.items && typeof(organization.items.file_type) !== "undefined") ? true:false;
        // isCoverImageNotNull = (organization.items && organization.items.file_type !== null) ? true:false;
        
        // type = organization.items && organization.items.type;
        return (
            
            <React.Fragment>
                <Grid Container>
                    <Grid item md={12}>
                        <Typography variant="h4" component="h3" align="center">
                            {event.items && event.items.title} <Chip label={"Wydarzenie"} />
                        </Typography>
                        <Box my={2}/>
                        <CoverImage org_id={event.items && event.items.organization_id} type={2}/>
                    </Grid>

                    <Grid container spacing="6" direction="row" >
                        <Grid item md={6}>
                            <Box>
                            <Chip
                                icon={<FaceIcon />}
                                label={`Początek wydarzenia: ${event.items && event.items.start_date}`}
                                // onDelete={handleDelete}
                                color="primary"
                            />
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            ss
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Box my={1}>
                    <Chip label={type == 0 && "Fundacja" || type == 1 && "Społeczność" || type == 2 && "Wydarzenie" || type == 3 && "Zbiórka"} />
                </Box> */}
                {/* {(isNotUndefinedTypeOfCoverImage && isCoverImageNotNull) && 
                <Box component="span" m={1}>
                <CardMedia
                component="img"
                image={`data:${organization.items && organization.items.file_type};base64,${organization.items && atob(organization.items.logo)}`}
                title="Logo organizacji"
                height={200}
                /></Box>
                } */}
                 {/* <Divider light /> */}
            {/* <PreviewDescription organization={organization} information={informationOrg}/> */}
        

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
    const { authentication, event, information } = state;
    const { user } = authentication;
    return {
        user,
        event,
        information,
    };
}

const connectedPreviewEvent = connect(mapStateToProps)(PreviewEvent);
export { connectedPreviewEvent as PreviewEvent };