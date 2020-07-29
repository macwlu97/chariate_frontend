import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

import SimpleTable from '../_components/Table/SimpleTable';
import SimpleTableFundraiser from '../_components/Table/SimpleTableFundraiser';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // width: 500,
    height: 450,
  },
}));

export default function PreviewDescription({organization, information, event, fundraiser}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var howManyPhoneNumber, PhoneNumbersList, aboutOrganizationList, charFieldOrganizationList, whatWeDoList,
  goalsList, addressList, notesList, emailList, registeredInfoList, websiteList;

  var charFieldOrganizationListCount, goalsListCount, addressListCount, notesListCount, emailListCount, registeredInfoListCount, websiteListCount;


  PhoneNumbersList = information.items && information.items.results.filter(el => el.type_info_id === 4);
  howManyPhoneNumber = PhoneNumbersList ? PhoneNumbersList.length : 0;
  aboutOrganizationList = information.items && information.items.results.filter(el => el.type_info_id === 10);
  charFieldOrganizationList = information.items && information.items.results.filter(el => el.type_info_id === 2);
  whatWeDoList = information.items && information.items.results.filter(el => el.type_info_id === 8);
  goalsList = information.items && information.items.results.filter(el => el.type_info_id === 9);
  addressList = information.items && information.items.results.filter(el => el.type_info_id === 12);
  notesList = information.items && information.items.results.filter(el => el.type_info_id === 11);
  emailList = information.items && information.items.results.filter(el => el.type_info_id === 14);
  registeredInfoList = information.items && information.items.results.filter(el => el.type_info_id === 13);
  websiteList = information.items && information.items.results.filter(el => el.type_info_id === 15);

  charFieldOrganizationListCount = charFieldOrganizationList ? charFieldOrganizationList.length : 0;
  goalsListCount = goalsList ? goalsList.length : 0;
  addressListCount = addressList ? addressList.length : 0;
  notesListCount = notesList ? notesList.length : 0;
  emailListCount = emailList ? emailList.length : 0;
  registeredInfoListCount = registeredInfoList ? registeredInfoList.length : 0;
  websiteListCount = websiteList ? websiteList.length : 0;

  const aboutOrganization = () => {
    var count = aboutOrganizationList ? aboutOrganizationList.length : 0
    var returned_object = aboutOrganizationList ? aboutOrganizationList[0] : null
    var returnIfElse = `Brak opisu.`;

    if (count === 1) return returned_object.content
    else return returnIfElse;
  }

  const whatWeDoOrganization = () => {
    var count = whatWeDoList ? whatWeDoList.length : 0
    var returned_object = whatWeDoList ? whatWeDoList[0] : null
    var returnIfElse = `Brak danych.`;

    if (count === 1) return returned_object.content
    else return returnIfElse;
  }

  const preventDefault = (event) => event.preventDefault();
  return (
    <div className={classes.root}>
    <AppBar position="static" color="default">
      <Tabs
        value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
      >
        <Tab label="Informacje" {...a11yProps(0)} />
        <Tab label="Co robimy" {...a11yProps(1)} />
        {/* <Tab label="Cele" {...a11yProps(2)} /> */}
        {/* <Tab label="Posty" {...a11yProps(3)} />
        <Tab label="Zdjęcia" {...a11yProps(4)} />
        <Tab label="Recenzje" {...a11yProps(5)} /> */}
        <Tab label="Notatki" {...a11yProps(2)} />
        <Tab label="Wydarzenia" {...a11yProps(3)} />
        <Tab label="Zbiórki" {...a11yProps(4)} />
      </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Grid container 
      spacing="6" direction="row" 
      >
       
      <Grid item md={6}>
        {/* <Box m={1}>
          <FormControl disabled>
            <InputLabel htmlFor="component-disabled" spacing={3}>
              {organization.items && organization.items.name} </InputLabel>
            <Input id="component-disabled"/>
            <FormHelperText>Nazwa</FormHelperText>
          </FormControl>
        </Box> */}
        <Box my={2}>
          <Typography variant="h4" component="h5">
                      O nas:
          </Typography>
          <Box mt={0.5} />
          {/* <Divider/> */}
          <List>
            <ListItem>{aboutOrganization()}</ListItem>
          </List>
        </Box>

        <Grid container my={2}>
        {charFieldOrganizationList && charFieldOrganizationList.map((charField, index) => 
          <Grid md={6} mt={3} style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <InfoIcon color="primary" fontSize="large" m={2} />
            <Box m={0.5} />
            {charField.content}
          </Grid>
        )}
        
        </Grid>

        <Grid container>
          <Box my={6}>
            <Typography variant="h4" component="h5">
                        Cele
            </Typography>
            <List>
            {goalsList && goalsList.map((goal, index) => 
             
              <ListItem> {goal.content}</ListItem>
             
            )}
            {goalsListCount === 0 && <ListItem>Brak danych.</ListItem>}
            </List>
          </Box>

          
            
        </Grid>
</Grid>

        <Grid item md={6}>
          <Grid container md={12}>
            <Grid item md={6}>
              <Box mt={2} >
                <Typography variant="h4" component="h5">
                            Zadzwoń
                </Typography>
              </Box>
              <Box mt={0.5} />
              
              {PhoneNumbersList && PhoneNumbersList.map((phoneNumber, index) => 
              <Box>
                <FormControl disabled >
                    <InputLabel htmlFor="component-disabled" spacing={3}>{phoneNumber.content} </InputLabel>
                    <Input id="component-disabled" 
                />
                    <FormHelperText>{phoneNumber.name} nr. {index+1}</FormHelperText>
                </FormControl>
              </Box>
              )}
              
              {howManyPhoneNumber === 0 && <List><ListItem>Brak danych.</ListItem></List>}
            </Grid>

            <Grid item md={6}>
              <Box mt={2}>
                <Typography variant="h4" component="h5">
                            Napisz
                </Typography>
              </Box>
              <Box mt={0.5} />
              
              {emailList && emailList.map((email, index) => 
              <Box>
                <FormControl disabled >
                    <InputLabel htmlFor="component-disabled" spacing={3}>{email.content} </InputLabel>
                    <Input id="component-disabled" 
                />
                    <FormHelperText>{email.name} nr. {index+1}</FormHelperText>
                </FormControl>
              </Box>
              )}
              {emailListCount === 0 && <List><ListItem>Brak danych.</ListItem></List>}
            </Grid>
            
          <Grid item md={6}>
            <Box my={2}>
              <Typography variant="h4" component="h5">
                          Adres rejestrowy
              </Typography>
              <List>
              {addressList && addressList.map((address, index) => 
              
                <ListItem> {address.content}</ListItem>
              
              )}
              {addressListCount === 0 && <ListItem>Brak danych.</ListItem>}
              </List>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box my={2}>
              <Typography variant="h4" component="h5">
                          Strona internetowa
              </Typography>
              <List>
              {websiteList && websiteList.map((website, index) => 
              
                <ListItem><Link href={`https://${website.content}`}>
                {website.content}</Link></ListItem>
              
              )}

              {websiteListCount === 0 && <ListItem>Brak danych.</ListItem>}
              </List>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box my={2}>
              <Typography variant="h4" component="h5">
                          Dane rejestrowe
              </Typography>
              <List>
              {registeredInfoList && registeredInfoList.map((registeredInfo, index) => 
              
                <ListItem>{registeredInfo.content}</ListItem>
              
              )}
              {registeredInfoListCount === 0 && <ListItem>Brak danych.</ListItem>}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>


        {/* <Grid item md={5}>

        <Typography variant="h4" component="h5">
                    Godziny otwarcia
                </Typography>
        <Typography variant="h5" component="h5">
        Dzisiaj  10:00 do 22:00
        [Więcej]
                </Typography>
                </Grid>
        
        <Grid item md={5}>
        <Typography variant="h4" component="h5">
                    More info
                </Typography>
        <Typography variant="h5" component="h5">
        - Zarejestrowana<br/>
        - Doświadczenie w działaniu
        
                </Typography>
                </Grid> */}
      
      </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing="6" direction="row" alignItems="center">
          <Grid item xs>
            <Box my={2}>
                <Typography variant="h3" component="h4">
                            Co robimy?
                </Typography>
                <Box mt={0.5} />
                {/* <Divider/> */}
                <Typography variant="h5" component="h6">
                {whatWeDoOrganization()}
                </Typography>
              </Box>
          </Grid>
          <Grid item xs>
            <Paper className={classes.mainFeaturedPost} ></Paper>
          </Grid>
        </Grid>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
      a */}


        {/* {charFieldOrganizationList && charFieldOrganizationList.map((charField, index) => 
          <Grid md={6} mt={3} style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <InfoIcon color="primary" fontSize="large" m={2} />
            <Box m={0.5} />
            {charField.content}
          </Grid>
        )} */}
      {/* </TabPanel> */}
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel> */}
      <TabPanel value={value} index={2}>
        <Grid container spacing="6" direction="row" alignItems="center">
            <Grid item xs>
              <List>
                {notesList && notesList.map((notes, index) => 
                  <ListItem> {notes.content}</ListItem>
                )}
                {notesListCount === 0 && <ListItem>Brak danych.</ListItem>}
              </List>
          
            </Grid>
            
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <SimpleTable event={event} mode={1}></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SimpleTableFundraiser fundraiser={fundraiser}  mode={1}></SimpleTableFundraiser>
      </TabPanel>
    </div>
  );
}