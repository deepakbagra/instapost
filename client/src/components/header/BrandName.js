import React from 'react';
import useStyles from './styles';

const BrandName = () => {
  const classes = useStyles();
  return (
    <span component='text' className={classes.brand} >
      UsedItem
    </span>
  )
}

export default BrandName;