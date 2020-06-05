import React from 'react';
import './header.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import logo from './logo.png';
import Button from "@material-ui/core/Button";


import NavBar from "./navbar";

const Header = () => (
        <Container maxWidth="xl">
            <Typography component="div" style={{ backgroundColor: 'white', height: '20vh' }}>
                <div style={{display: 'flex', paddingTop: '10px'}}>
                    <div style={{display: 'flex', margin: 'auto'}}>
                        <img className='logo' alt='WindsorPark' src={logo} />
                    </div>
                    <div style={{display: 'flex', margin: '10px'}}>
                        <Button className='loginButton' variant="contained" color="primary">
                            Login
                        </Button>
                    </div>
                </div>
            </Typography>
            {/*<div className='right-flexx header-right displayNone'>*/}
                <NavBar/>
            {/*</div>*/}
        </Container>
);

export default Header;