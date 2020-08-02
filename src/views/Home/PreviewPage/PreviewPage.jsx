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

import FavoriteIcon from '@material-ui/icons/Favorite';
import { likeActions } from '../../../_actions';

class PreviewPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          _id: this.props.match.params._id,
          like_status: 0
        //   _type: this.props.match.params._type,
        }

        this.props.dispatch(organizationActions.getOrganization(this.state._id));
        this.props.dispatch(organizationActions.getAllInformation(this.state._id));
        this.props.dispatch(organizationActions.getOrganizationEvent(this.state._id))
        this.props.dispatch(organizationActions.getOrganizationFundraising(this.state._id))
        this.props.dispatch(likeActions.get_my_like_organization(this.state._id))


      }
    setLikeStatus = (num) => {
        this.setState(state => ({ like_status: num, }));
        console.log(num)
    };
    render() { //renderowanie warunkowe
        const { user, organization, informationOrg, event, fundraiser, like } = this.props;
        let isNotUndefinedTypeOfCoverImage;
        let isCoverImageNotNull;
        let type; 

        isNotUndefinedTypeOfCoverImage = (organization.items && typeof(organization.items.file_type) !== "undefined") ? true:false;
        isCoverImageNotNull = (organization.items && organization.items.file_type !== null) ? true:false;
        
        type = organization.items && organization.items.type;
        return (
            
            <React.Fragment>
                <Typography variant="h4" component="h3" align="center" >
                    {organization.items && organization.items.name} <Chip label={type == 0 && "Fundacja" || type == 1 && "Społeczność" || type == 2 && "Wydarzenie" || type == 3 && "Zbiórka"} /> 
                    {(like.items && (like.items.status === 0 && this.state.like_status === 0) &&
                    <IconButton aria-label="add to favorites" onClick={()=>{

                        console.log(`like by ${organization.items && organization.items.id} and ${user.id}`)
                        var toJson = {
                            organization_id: organization.items && organization.items.id,
                            add_user_id: user.id,
                        }
                        const { dispatch } = this.props;
                        dispatch(likeActions.postLikeOrganization(toJson))
                        this.setLikeStatus(1)
                    }}>
                    
                    <FavoriteIcon />Polub
                    </IconButton>) || (like.items && (like.items.status === 1 ||  this.state.like_status === 1) && <Chip color="primary" label="Polubione"/>)
                    }
                </Typography>
                {/* <Box my={1}>
                    <Chip label={type == 0 && "Fundacja" || type == 1 && "Społeczność" || type == 2 && "Wydarzenie" || type == 3 && "Zbiórka"} />
                </Box> */}
                {(isNotUndefinedTypeOfCoverImage && isCoverImageNotNull) && 
                <Box component="span" m={1}>
                <CardMedia
                component="img"
                image={`data:${organization.items && organization.items.file_type};base64,${organization.items && atob(organization.items.logo)}`}
                title="Logo organizacji"
                height={200}
                /></Box>
                }

                {!(isNotUndefinedTypeOfCoverImage && isCoverImageNotNull) &&
                    <Box my={2}/>
                }
                 <Divider light />
                <PreviewDescription organization={organization} information={informationOrg} event={event} fundraiser={fundraiser}/>
        
                <p>
                {/* <React.Button onClick={history.goBack}>Go Back</React.Button> */}
                </p>

            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { authentication, organization, informationOrg, event, fundraiser, like } = state;
    const { user } = authentication;
    return {
        user,
        organization,
        informationOrg,
        event,
        fundraiser,
        like
    };
}

const connectedPreviewPage = connect(mapStateToProps)(PreviewPage);
export { connectedPreviewPage as PreviewPage };