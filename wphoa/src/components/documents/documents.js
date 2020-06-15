import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Homepage from "../homepage/homepage";

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

const Documents = (props) => {
  const classes = useStyles();
  const documents = [{id: 1, name:'ACC Overview', href:'./ACC_Overview_Memo.doc'},
                   {id: 2, name:'ACC Roles & Responsibilities', href:'./ACC_R&R.docx'},
                   {id: 3, name:'Bylaws In CC&Rs', href:'./Bylaws_In_CC&Rs.pdf'},
                   {id: 4, name:'ACC Application Form', href:'./WPHOA_ACC_App_Form.doc'}]

  if(props.isSignedIn) {
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {documents.map((doc) => (
              <Grid key={doc.id} item>
                <Paper className={classes.paper}>
                  <p>{doc.name}&nbsp;
                    <a href={doc.href} download>
                      <FontAwesomeIcon icon={faDownload} />
                    </a>

                  </p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  } else return <Homepage/>}

export default Documents;
