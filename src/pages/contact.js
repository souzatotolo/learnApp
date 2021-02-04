import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Contact() {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1.7),
        width: theme.spacing(45),
        height: theme.spacing(45),
        borderRadius: theme.spacing(2)
      },
    },
  }));

  const classes = useStyles();

  return (
    <div >
      <div id="contact" style={{ background: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <h1 style={{ marginTop: 70, fontSize: 40 }}>Contact Us</h1>
        </div>

        <div className={classes.root}>

          <Paper style={{ background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }} elevation={3} >
            <div style={{ padding: 50, justifyContent: 'center' }}>
              <h1 style={{ color: '#222', borderBottom: '.8px solid', marginBottom: 2 }}>Where find us</h1>
              <p style={{ color: '#3A9EE7', fontWeight: 'bold' }}>240, Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </Paper>

          <Paper style={{ background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }} elevation={3} >
            <div style={{ padding: 20, justifyContent: 'center' }}>
              <h1 style={{ color: '#222', borderBottom: '.8px solid' }}>Telephone</h1>
              <p style={{ color: '#3A9EE7', }}>+55 11 2739-23242</p>
            </div>
          </Paper>

          <Paper style={{ marginRight: 60, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }} elevation={3} >
            <div style={{ padding: 50, justifyContent: 'center', }}>
              <h1 style={{ color: '#222', borderBottom: '.8px solid' }}>Email</h1>
              <a style={{ color: '#3A9EE7', fontWeight: 'bold' }} href='#'>contact@contact.com</a>
            </div>
          </Paper>

        </div>


        <div style={{ display: 'flex', alignSelf: 'flex-end', justifyContent: 'space-between' }}>
          <p style={{ marginRight: 1000, color: '#888' }}>Developed by souzatotolo</p>
          <a boxShadow={3} href="https://api.whatsapp.com/send?phone=5511985913857"><FaWhatsapp color="#A6C247" size={60} /></a>
        </div>

      </div>
    </div >
  );
}