import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import Shoes from '../../../ShoesData.json';
import NotFound from '../../NotFound/NotFound';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width: 600,
    height: 500,
    margin: '0 auto',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20
  }
}));

export default function ProductItem() {
  const classes = useStyles();
  let { id } = useParams();
  console.log(id);
  const shoe = Shoes[id];
  if (!shoe) {
    return <NotFound />
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        {shoe.name}
        <img src={shoe.img} style={{ width: 600, marginTop: 10, height: 463 }} alt="" />
      </Paper>
    </div>
  )
}
