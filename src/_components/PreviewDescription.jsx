import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
}));

export default function PreviewDescription({organization, information}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var howManyPhoneNumber;
  var PhoneNumbersList;
  var aboutOrganizationList;
  var charFieldOrganizationList;
  PhoneNumbersList = information.items && information.items.results.filter(el => el.type_info_id === 4);
  howManyPhoneNumber = PhoneNumbersList ? PhoneNumbersList.length : 0;
  aboutOrganizationList = information.items && information.items.results.filter(el => el.type_info_id === 10);
  charFieldOrganizationList = information.items && information.items.results.filter(el => el.type_info_id === 2);

  const aboutOrganization = () => {
    var count = aboutOrganizationList ? aboutOrganizationList.length : 0
    var returned_object = aboutOrganizationList ? aboutOrganizationList[0] : null
    var returnIfElse = `Brak opisu.`;

    if (count === 1) return returned_object
    else return returnIfElse;
  }

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
        <Tab label="Cele" {...a11yProps(2)} />
        <Tab label="Posty" {...a11yProps(3)} />
        <Tab label="Zdjęcia" {...a11yProps(4)} />
        <Tab label="Recenzje" {...a11yProps(5)} />
        <Tab label="Notatki" {...a11yProps(6)} />
      </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Grid container 
      spacing="6" direction="row" alignItems="center"
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
        <Box>
          <Typography variant="h4" component="h5">
                      O nas:
          </Typography>
          <Box mt={0.5} />
          {/* <Divider/> */}
          {aboutOrganization().content}
        </Box>

        
        {charFieldOrganizationList && charFieldOrganizationList.map((charField, index) => 
          <Box mt={3} style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <InfoIcon color="primary" fontSize="large" m={2} />
            <Box m={0.5} />
            {charField.content}
          </Box>
        )}
        
       
        </Grid>

        <Grid item md={6}>
        <Typography variant="h4" component="h5">
                    Zadzwoń
        </Typography>
        {/* {informationObj.results &&
          <List>
          {informationObj.results.map((informationElement, index) => */}
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
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}