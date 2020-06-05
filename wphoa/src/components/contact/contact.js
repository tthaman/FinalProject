import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    fontSize: 10,
  },
  item: {
    padding: 5,
  },
  title: {
    fontSize: 14,
  },
  text: {
    width:'100%',
    fontSize: 5,
  },
}));

const Contact = () => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={3}/>
        <Grid item sm={6}>
          <Card variant="outlined">
            <CardHeader className={classes.title} title="Contact WPHOA"/>
            <CardContent className={classes.content}>
              <div className={classes.item}>
                <TextField className={classes.text} name='firstName' label="First Name"
                           onChange={handleChange} variant="outlined" />
              </div>
              <div className={classes.item}>
                <TextField className={classes.text} name='lastName' label="Last Name"
                           onChange={handleChange} variant="outlined" />
              </div>
              <div className={classes.item}>
                <TextField className={classes.text} name='email' label="email" type="email"
                           onChange={handleChange} variant="outlined" />
              </div>
              <div className={classes.item}>
                <TextField className={classes.text} name='message' label="Message"
                           onChange={handleChange} variant="outlined" rows='5' multiline />
              </div>
              <div className={classes.item}>
                <Button className='submit' onChange={handleChange} variant="contained" color="primary">
                    Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3}/>
      </Grid>
    </div>
  );
}

export default Contact;