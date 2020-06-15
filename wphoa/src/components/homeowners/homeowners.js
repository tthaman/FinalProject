import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as firebase from "firebase/app";
import 'firebase/firestore';
import Homepage from "../homepage/homepage";

const firestore = firebase.firestore();
const columns = [
    { id: 'lastName', label: 'Last Name', minWidth: 100 },
    { id: 'firstName', label: 'First Name(s)', minWidth: 200 },
    { id: 'lotNumber', label: 'Lot #', minWidth: 75},
    { id: 'address', label: 'Address', minWidth: 200},
    { id: 'email', label: 'email', minWidth: 170},
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function Homeowners(props) {
    const classes = useStyles();
    const [homeowners, setHomeowners] = useState([]);

    useEffect(() => {
      getHomeowners();
    });

    const addHomeowners = () => {
      firestore.collection('/homeowners').doc("Kanz").set({
        lastName: "Kanz",
        firstName: ['Melanie', 'Bill'],
        children: ['Cooper', 'Suzanne', 'Jacob'],
        email: "kanzdo@gmail.com",
        phone: "2066537529",
        address: "432 225th St SE",
        lotNumber: 13
      })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        })
    };

    const getHomeowners = () => {
      firestore
        .collection('/homeowners')
        .onSnapshot(
          snapshot => setHomeowners(snapshot.docs.map(doc => doc.data())),
          err => console.log(err)
        )
    };
  if(props.isSignedIn) {
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{minWidth: column.minWidth}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {homeowners.map((homeowner) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={homeowner.id}>
                    {columns.map((column) => {
                      const value = homeowner[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value.toString()}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
  } else return <Homepage/>}
