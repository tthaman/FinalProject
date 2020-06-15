import React, {useEffect} from 'react';
import './homepage.css';
import Background from './newwp.jpeg';
import Container from '@material-ui/core/Container';
import Login from '../login/login'
import PropTypes from 'prop-types';

const Homepage = (props) => {

  const { isSignedIn, setIsSignedIn, ...other } = props;

  if (!isSignedIn) {
    return (
      <Login/>
    );
  }
  return (
    <Container maxWidth="med">
      <img alt='WindsorPark' src={Background}/>
    </Container>
  );
}

Homepage.propTypes = {
  isSignedIn: PropTypes.bool,
  setIsSignedIn: PropTypes.func
}

export default Homepage;
