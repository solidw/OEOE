import React from 'react'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles({
  root: {
    height: 30,
    backgroundColor: lighten('#ccff90', 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#76ff03'
  }
})(LinearProgress)

// Inspired by the Facebook spinners.

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}))

const ProgressBars = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant='determinate'
        color='secondary'
        value={30}
      />
    </div>
  )
}

export default ProgressBars
