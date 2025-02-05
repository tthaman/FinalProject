import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Homepage from '../homepage/homepage';
import EventCalendar from '../events/eventCalendar';
import Contact from '../contact/contact';
import Homeowners from '../homeowners/homeowners';
import Documents from '../documents/documents';
import '../header/header.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={5}>
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
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                >
                    <LinkTab label="Home" {...a11yProps(0)} />
                    <LinkTab label="Event Calendar"  {...a11yProps(1)} />
                    <LinkTab label="Contact"  {...a11yProps(2)} />
                    <LinkTab label="Homeowner List"  {...a11yProps(3)} />
                    <LinkTab label="Documents & Forms"  {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Homepage isSignedIn={props.isSignedIn} setIsSignedIn={props.setIsSignedIn}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <EventCalendar/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Contact/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Homeowners isSignedIn={props.isSignedIn}/>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Documents isSignedIn={props.isSignedIn}/>
            </TabPanel>
        </div>
    );
}
