import React, {useEffect} from 'react';
import './header.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import logo from './logo.png';
import firebase from 'firebase';
import Button from "@material-ui/core/Button";
import Homepage from "../homepage/homepage";

export default function Header(props) {

  useEffect(() => {
    let unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => {
        props.setIsSignedIn(!!user)
      }
    );
    return () => {
      unregisterAuthObserver();
    }
  },[]);

  const signout = () => {
    firebase.auth().signOut();
    props.setIsSignedIn(false);
    return <Homepage/>
  }

  return (
    <Container maxWidth="xl">
      <Typography component="div" style={{backgroundColor: 'white', height: '20vh'}}>
        <div style={{display: 'flex', paddingTop: '10px'}}>
          <div style={{display: 'flex', margin: 'auto'}}>
            <img className='logo' alt='WindsorPark' src={logo}/>
          </div>
          <div style={{display: 'flex', margin: '10px'}}>
            {props.isSignedIn &&
              <Button className='loginButton' variant="contained" color="primary"
                  onClick={signout}>
                Sign-out
              </Button> }
          </div>
        </div>
      </Typography>
    </Container>
  );

}
