import React from 'react'
import classes from './ButtonSearch.module.css';

export default function ButtonSearch({children, ...props}) {
  return (
    <button className={classes.searchBtn} {...props} type='button'>
      {children}
    </button>
  )
}
