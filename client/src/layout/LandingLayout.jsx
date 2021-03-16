import React from 'react';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  heroText: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    maxWidth: 300,
  },
  overlay: {
    backgroundImage:
      'linear-gradient(180deg, rgb(58,141,255, 0.85) 0%, rgb(134,185,255, 0.85) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingBottom: 145,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundImage: 'url(./images/bg-img.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const LandingLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={5} className={classes.image}>
        <Box className={classes.overlay}>
          <Hidden smDown>
            <img width={67} src="/images/chatBubble.png" alt="chat bubble" />
            <Hidden smDown>
              <p className={classes.heroText}>
                Converse with anyone with any language
              </p>
            </Hidden>
          </Hidden>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={7} elevation={6} component={Paper} square>
        {children}
      </Grid>
    </Grid>
  );
};

export default LandingLayout;
