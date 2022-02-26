import React from 'react';
import useStyles from './styles';

const BrandName = () => {
  const classes = useStyles();
  return (
    <div component='text' className={classes.brand} >
      rejectshop
    </div>
  )
}

export default BrandName;