import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import NavBar from "./components/navbar/navbar";
import Homepage from './components/homepage/homepage';
import EventCalendar from './components/events/eventCalendar';
import Contact from './components/contact/contact';
import Documents from './components/documents/documents';
import Homeowners from './components/homeowners/homeowners';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
      <div className="App">
        <Router>
          <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
          <NavBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
          <Switch>
            <Route exact path="/"><Homepage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/></Route>
            <Route exact path="/homepage"><Homepage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/></Route>
            <Route exact path="/events"><EventCalendar/></Route>
            <Route exact path="/contact"><Contact/></Route>
            <Route exact path="/homeowners"><Homeowners isSignedIn={isSignedIn} /></Route>
            <Route exact path="/documents"><Documents isSignedIn={isSignedIn} /></Route>
          </Switch>
        </Router>

      </div>
    );
}

export default App;
