import React from 'react'
import Shoes from '../../ShoesData.json';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border: '1px solid black',
    width: 1100,
    margin: '0 auto',
    marginBottom: 40
  },
  paper: {
    height: 200,
    width: 250,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    textDecoration: 'none',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Product() {
  const classes = useStyles();
  console.log(Object.keys(Shoes).length);

  return (
    <div style={{ marginTop: 40 }}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {Object.keys(Shoes).map((key) => (
              <Grid key={key} item lg={3} >
                <Link to={`/product/${key}`} style={{ textDecoration: 'none' }}>
                  <Paper className={classes.paper} elevation={5}>
                    {Shoes[key].name}
                    <img src={Shoes[key].img} alt="" style={{ width: 250, height: 180 }} />
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
