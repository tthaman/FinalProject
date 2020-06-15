import React, {useEffect} from 'react'
import { Calendar, Views , momentLocalizer } from 'react-big-calendar'
import * as firebase from "firebase/app";
import 'firebase/firestore';
import eventList from './events';
import moment from 'moment';
import './css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
const firestore = firebase.firestore();
let allViews = Object.keys(Views).map(k => Views[k]);

moment().format('MMMM Do YYYY, h:mm:ss a'); // June 13th 2020, 4:36:31 pm

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

let EventCalendar = () => {
  const [events, setEvents] = React.useState([]);

  const getEvents = () => {
    firestore
      .collection('/events')
      .onSnapshot(
        // snapshot => setEvents(snapshot.docs.map(doc => doc.data())),
        snapshot => snapshot.docs.map(doc => console.log(doc.data())),
        err => console.log(err)
      )
  };

  useEffect(() => {
    getEvents();
  });

  const addEvents = () => {
    firestore.collection('/events').add({
      title: 'Trash Pickup',
      allDay: true,
      start: new Date(2020, 7, 14, 7, 0, 0),
      end: new Date(2020, 7, 14, 14,0,0),
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Calendar
      style={{ height: 700 }}
      localizer={localizer}
      events={eventList}
      // events={events}
      defaultView={Views.MONTH}

      // views={allViews}
      step={60}
      showMultiDayTimes
      // max={dates.add(dates.endOf(new Date(2020, 17, 1), 'day'), -1, 'hours')}
      defaultDate={new Date(2020, 6, 13)}
      components={{
        timeSlotWrapper: ColoredDateCellWrapper,
      }}
    />
  )
}

export default EventCalendar;
