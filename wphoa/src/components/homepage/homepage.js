import React from 'react';
import './homepage.css';
import wpImage from './wpImage.jpg'
import Container from '@material-ui/core/Container';

// const containerStyle = {
//     height: '700px',
// }

const Homepage = () => {
    return (
        // <Container fluid="xl" style={containerStyle}>
            <img src={wpImage} alt="WindsorParkImage"/>
        // </Container>
    );
}

export default Homepage;