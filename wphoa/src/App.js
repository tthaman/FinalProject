import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';
import News from './components/news/news';
// import contact from './components/contact/contact';
// import homeowners from './components/homeowners/homeowners';
// import documents from './components/documents/documents';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
require('dotenv').config();

const firestore = firebase.firestore();

firestore
  .collection('/homeowners')
  .doc('Thaman-Foye')
  .get()
  .then(data => console.log(data));


const NotFound = () => <div>404</div>

function App() {
    return (
        <div className="App">
            {/*<Router>*/}
                <Header/>
                {/*<Switch>*/}
                {/*    <Route exact path="/" component={Homepage} />*/}
                {/*    <Route exact path="/homepage" component={Homepage} />*/}
                {/*    <Route exact path="/news" component={News} />*/}
                {/*/!*    <Route exact path="/contact" component={contact} />*!/*/}
                {/*/!*    <Route exact path="/homeowners" component={homeowners} />*!/*/}
                {/*/!*    <Route exact path="/documents" component={documents} />*!/*/}
                {/*    <Route path="*" component={NotFound}></Route>*/}
                {/*</Switch>*/}
            {/*</Router>*/}
        </div>
    );
}

export default App;
