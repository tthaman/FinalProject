import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Calendar from "react-calendar";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
// import 'react-calendar/dist/Calendar.css';
import './news.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    news: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '250px',
    },
    newsHeader: {
        fontSize: 12,
    },
    events: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '240px',
    },
    content: {
        fontSize: 10,
        textAlign:'left',
    },
    title: {
        fontSize: 14,
    },
}));

const News = (props) => {
    const classes = useStyles();
    const [date, setDate] = useState(new Date());

    const onChange = date => setDate({ date });

    if(props.isSignedIn) {
        return (
          <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                      <Card className={classes.news} variant="outlined">
                          <CardHeader className={classes.title} title="Neighborhood News"/>
                          <CardContent className={classes.content}>
                              <Typography color="textSecondary" gutterBottom>
                                  Word of the Day
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid item xs={8}>
                      <Card className={classes.events} variant="outlined">
                          <CardHeader className={classes.title} title="EventCalendar"/>
                          <CardContent className={classes.content}>
                              <Typography color="textSecondary" gutterBottom>
                                  Word of the Day
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid item className={classes.events} xs={4}>
                      {/*<Calendar onChange={onChange} value={date}/>*/}
                  </Grid>
              </Grid>
          </div>
        );
    } else return null;
}

export default News;
