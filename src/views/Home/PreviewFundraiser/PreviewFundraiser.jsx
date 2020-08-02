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

import RoomIcon from '@material-ui/icons/Room';
import TodayIcon from '@material-ui/icons/Today';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PeopleIcon from '@material-ui/icons/People';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { likeActions } from '../../../_actions';

class PreviewFundraiser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          _id: this.props.match.params._id,
          like_status: 0
        //   _type: this.props.match.params._type,
        }

        this.props.dispatch(organizationActions.getFundraising(this.state._id));
        this.props.dispatch(organizationActions.getAllFundraiserInformation(this.state._id));
        this.props.dispatch(likeActions.get_my_like_fundraising(this.state._id))
      }
    setLikeStatus = (num) => {
        this.setState(state => ({ like_status: num, }));
        console.log(num)
    };
    render() { //renderowanie warunkowe
        const { user, fundraiser, informationOrg, like } = this.props;

        let goalsInformationList, postsInformationList, numbersInformationList, aboutInformationList, phoneNumberList, bankAccountList;
        let goalsCount, postsCount, numbersCount, aboutCount, phoneCount, bankAccCount;
        let owner; 

        goalsInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 23);
        postsInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 24);
        numbersInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 25);
        aboutInformationList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 26);
        phoneNumberList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 28);
        bankAccountList = informationOrg.items && informationOrg.items.results.filter(el => el.type_info_id === 27);

        goalsCount = goalsInformationList ? goalsInformationList.length : 0;
        postsCount = postsInformationList ? postsInformationList.length : 0;
        numbersCount = numbersInformationList ? numbersInformationList.length : 0;
        aboutCount = aboutInformationList ? aboutInformationList.length : 0;
        phoneCount = phoneNumberList ? phoneNumberList.length : 0;
        bankAccCount = bankAccountList ? bankAccountList.length : 0;

        // cityName = (fundraiser.items && fundraiser.items.city !== undefined) ? fundraiser.items && fundraiser.items.city.name : "";
        owner = (fundraiser.items && fundraiser.items.organization !== undefined) ? fundraiser.items && fundraiser.items.organization.name : "";

        return (
            
            <React.Fragment>
                <Grid Container>
                    <Grid item md={12}>
                        <Typography variant="h4" component="h3" align="center">
                            {fundraiser.items && fundraiser.items.title} <Chip label={"Zbiórka"} />
                            {(like.items && (like.items.status === 0 && this.state.like_status === 0) &&
                                <IconButton aria-label="add to favorites" onClick={()=>{

                                    console.log(`like by ${fundraiser.items && fundraiser.items.id} and ${user.id}`)
                                    var toJson = {
                                        fundraising_id: fundraiser.items && fundraiser.items.id,
                                        add_user_id: user.id,
                                    }
                                    const { dispatch } = this.props;
                                    dispatch(likeActions.postLikeFundraising(toJson))
                                    this.setLikeStatus(1)
                            }}>
                                
                            <FavoriteIcon />Polub</IconButton>) 
                            || (like.items && (like.items.status === 1 ||  this.state.like_status === 1) && <Chip color="primary" label="Polubione"/>)
                            }
                        </Typography>
                        <Box my={2}/>
                        <CoverImage org_id={fundraiser.items && fundraiser.items.organization_id} type={2}/>
                    </Grid>

                    <Grid container spacing="6" direction="row" >
                        <Grid item md={3}>
                            <Box my = {2}>
                                        <Chip
                                            icon={<TodayIcon />}
                                            label={`Dodano: ${fundraiser.items && fundraiser.items.start_date}`}
                                            // onDelete={handleDelete}
                                            color="primary"
                                        />
                            </Box>
                            <Box my = {2}>
                                    <Chip
                                        icon={<TodayIcon />}
                                        label={`Koniec zbiórki dnia: ${fundraiser.items && fundraiser.items.end_date}`}
                                        // onDelete={handleDelete}
                                        color="primary"
                                    />
                            </Box>
                            <Box my = {2}>
                                <Chip
                                    icon={<PeopleIcon />}
                                    label={`Organizator: ${owner}`}
                                    // onDelete={handleDelete}
                                    color="primary"
                                />
                            </Box>

                            <Box my = {2}>
                                <Typography variant="h4" component="h5">
                                    Zadzwoń
                                </Typography>
                            {(phoneCount >= 1 && phoneNumberList && phoneNumberList.map((phoneNumber, index) => 
                                    <Box mx={2}>
                                        <FormControl disabled >
                                            <InputLabel htmlFor="component-disabled" spacing={3}>{phoneNumber.content} </InputLabel>
                                            <Input id="component-disabled" 
                                        />
                                            <FormHelperText>{phoneNumber.name} nr. {index+1}</FormHelperText>
                                        </FormControl>
                                    </Box>
                                )
                            ) || phoneCount == 0 && <Box my={2}><ListItem>Brak numerów telefonu.</ListItem></Box>}
                            </Box>

                            <Box my = {2}>
                                <Typography variant="h4" component="h5">
                                    Numery kont wpłat
                                </Typography>
                                <List>
                            {(bankAccCount >= 1 && bankAccountList && bankAccountList.map((bankAccount, index) => 
                                <ListItem>{bankAccount.content} </ListItem>
                                           )
                            ) || bankAccCount == 0 && <Box my={2}><ListItem>Brak kont bankowych.</ListItem></Box>}
                            </List></Box>
              

                        </Grid>
                        <Grid item md={9}>
                            <Box my={2}>
                                    <Typography variant="h4" component="h3">
                                            Wizytówka
                                    </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" component="h7">
                                    <ListItem> {`${fundraiser.items && fundraiser.items.description}`} </ListItem>
                                </Typography>
                            </Box>

                            {(aboutCount >= 1 && 
                                        aboutInformationList && aboutInformationList.map((aboutElement, index) =>
                                            <Box>
                                                <Typography variant="h6" component="h7">
                                                    <ListItem> {aboutElement.content}</ListItem>
                                                </Typography>
                                            </Box>
                                        )
                            )} 

                            <Box my={3}>
                                <Typography variant="h4" component="h3">
                                        Cele
                                </Typography>
                            </Box>

                            {(goalsCount >= 1 &&
                                goalsInformationList && goalsInformationList.map((goalElement, index) =>
                                            <Box>
                                                <Typography variant="h6" component="h7">
                                                    <ListItem> {goalElement.content}</ListItem>
                                                </Typography>
                                            </Box>
                                        ))
                            || 
                            (goalsCount == 0 && 
                                <Typography variant="h6" component="h4" align="center">
                                    <Box my={2}>Brak celów.</Box>
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
    const { authentication, fundraiser, informationOrg, like } = state;
    const { user } = authentication;
    return {
        user,
        fundraiser,
        informationOrg,
        like
    };
}

const connectedPreviewFundraiser = connect(mapStateToProps)(PreviewFundraiser);
export { connectedPreviewFundraiser as PreviewFundraiser };