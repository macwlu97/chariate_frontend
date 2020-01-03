import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 424,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function PreviewDescription() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Informacje" {...a11yProps(0)} />
        <Tab label="Co robimy" {...a11yProps(1)} />
        <Tab label="Cele" {...a11yProps(2)} />
        <Tab label="Posty" {...a11yProps(3)} />
        <Tab label="Zdjęcia" {...a11yProps(4)} />
        <Tab label="Recenzje" {...a11yProps(5)} />
        <Tab label="Notatki" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Grid container spacing="6" direction="row" alignItems="center">
      <Grid item md={4}>
        <FormControl disabled>
            <InputLabel htmlFor="component-disabled" spacing={3}>
             
                Fundajca </InputLabel>
            <Input id="component-disabled" 
        // value={name} onChange={handleChange} 
        />
            <FormHelperText>Nazwa</FormHelperText>
        </FormControl>
        </Grid>
        <Grid item md={4}>
        <FormControl disabled >
            <InputLabel htmlFor="component-disabled" spacing={3}>753222111 </InputLabel>
            <Input id="component-disabled" 
        // value={name} onChange={handleChange} 
        />
            <FormHelperText>Phone number</FormHelperText>
        </FormControl>    
        </Grid>
        <Grid item md={5}>
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
                </Grid>
      
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