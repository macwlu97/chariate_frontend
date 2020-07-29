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
import RoomIcon from '@material-ui/icons/Room';
import TodayIcon from '@material-ui/icons/Today';

import EventTimeline from '../../../_components/event_timeline/event_timeline';
import CoverImage from '../../../_components/CoverImage';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PeopleIcon from '@material-ui/icons/People';

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
        const { event, informationOrg } = this.props;
        let isNotUndefinedTypeOfCoverImage;
        let isCoverImageNotNull;
        let type; 
        
        let detailedInformationList, scheduleInformationList, addressInformationList;
        let detailedCount, scheduleCount, addressCount;
        let owner, cityName;
        detailedInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 20);
        scheduleInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 21);
        addressInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 22);
        
        detailedCount = detailedInformationList ? detailedInformationList.length : 0;
        scheduleCount = scheduleInformationList ? scheduleInformationList.length : 0;
        addressCount = addressInformationList ? addressInformationList.length : 0;

        cityName = (event.items && event.items.city !== undefined) ? event.items && event.items.city.name : "";
        owner = (event.items && event.items.organization !== undefined) ? event.items && event.items.organization.name : "";
        
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

                    <Grid container spacing="6" direction="row">
                        <Grid item md={2}>
                            <Box my = {2}>
                                <Chip
                                    icon={<TodayIcon />}
                                    label={`${event.items && event.items.start_date}`}
                                    // onDelete={handleDelete}
                                    color="primary"
                                />
                            </Box>
                            <Box my = {2}>
                                <Chip
                                    icon={<RoomIcon />}
                                    label={`Lokalizacja: ${cityName}`}
                                    // onDelete={handleDelete}
                                    color="primary"
                                />
                            </Box>
                            {(addressCount >= 1 &&
                            <Box my = {2}>
                                {addressInformationList && addressInformationList.map((addressElement, index) => 
                                <ListItem> {addressElement.content}</ListItem>
                                )}
                            </Box>) || addressCount == 0 && <Box my={2}><ListItem>Brak miejsca wydarzenia.</ListItem></Box>}
                            <Box my = {2}>
                                <Chip
                                    icon={<PeopleIcon />}
                                    label={`Organizator: ${owner}`}
                                    // onDelete={handleDelete}
                                    color="primary"
                                />
                            </Box>
                            
                        </Grid>

                        <Grid item md={10}>
                            <Box my={3}>
                                <Typography variant="h4" component="h3">
                                        Szczegółowe informacje
                                </Typography>
                            </Box>
                            {(detailedCount >= 1 && 
                                <Box my={1}>
                                    <Typography variant="h6" component="h4" align="center">
                                        {detailedInformationList && detailedInformationList.map((detailElement, index) => 
                                            <ListItem> {detailElement.content}</ListItem>
                                            )}
                                    </Typography>
                                </Box>) || 
                            (detailedCount == 0 && 
                                <Typography variant="h6" component="h4" align="center">
                                    <Box my={2}>Brak szczegółowego opisu.</Box>
                                </Typography>
                            )}
                        
                        <Box my={3}>
                            <Typography variant="h4" component="h3">
                                    Harmonogram
                            </Typography>
                        </Box>

                        {(scheduleCount >= 1 &&
                            <EventTimeline scheduleInformationList={scheduleInformationList}/>)
                        || 
                        (scheduleCount == 0 && 
                            <Typography variant="h6" component="h4" align="center">
                                <Box my={2}>Brak harmonogramu.</Box>
                            </Typography>
                        )}

                        </Grid>
                    </Grid>
                </Grid>
                

            
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const { authentication, event, informationOrg } = state;
    const { user } = authentication;
    return {
        user,
        event,
        informationOrg,
    };
}

const connectedPreviewEvent = connect(mapStateToProps)(PreviewEvent);
export { connectedPreviewEvent as PreviewEvent };