import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

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
  button: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

const initVals = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

const Contact = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState(initVals);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContactMe();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  const resetInputFields = () => {
    setState(initVals);
  }

  const addContactMe = () => {
    firestore
      .collection("contactMe").add({
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      message: state.message
    })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        resetInputFields();
        confirm();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  const confirm = () => {
    confirmAlert({
      customUI: ({onClose}) => {
        return (
          <div className='custom-ui' style={{display:'inline-block'}}>
            <p>Thank you for contacting WPHOA!</p>
            <button className={classes.button} onClick={onClose}>OK</button>
          </div>
        );
      }
    });
  }

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item sm={3}/>
          <Grid item sm={6}>
            <form onSubmit={handleSubmit}>

              <Card variant="outlined">
                <CardHeader className={classes.title} title="Contact WPHOA"/>
                <CardContent className={classes.content}>
                  <div className={classes.item}>
                    <TextField className={classes.text} name='firstName' label="First Name"
                               value={state.firstName} onChange={handleChange} variant="outlined"/>
                  </div>
                  <div className={classes.item}>
                    <TextField className={classes.text} name='lastName' label="Last Name"
                               value={state.lastName} onChange={handleChange} variant="outlined"/>
                  </div>
                  <div className={classes.item}>
                    <TextField className={classes.text} name='email' label="email" type="email"
                               value={state.email} onChange={handleChange} variant="outlined"/>
                  </div>
                  <div className={classes.item}>
                    <TextField className={classes.text} name='message' label="Message"
                               value={state.message} onChange={handleChange} variant="outlined" rows='5' multiline/>
                  </div>
                  <div className={classes.item}>
                    <Button type={"submit"}  className='submit' variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </Grid>
          <Grid item lg={3}/>
        </Grid>
      </div>
    );
}

export default Contact;
