import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import {
  lightBlue,
  indigo,
  grey,
  blueGrey,
  red
} from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.black
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#424242',
    color: '#9e9e9e',

    fontWeight: 'bold',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#aaaaaa'
    }
  },
  link: {
    color: '#9e9e9e',

    fontWeight: 'bold'
  },
  label: {
    color: '#9e9e9e',
    fontWeight: 'bold'
  }
}))

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: grey,
    secondary: {
      main: '#424242'
    }
  }
})

const LoginPage = () => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src='https://pbs.twimg.com/profile_images/1070664386589704192/5XaWZmRW.jpg'
          />
          <Typography component='h1' variant='h5' className={classes.label}>
            Login Page
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='id'
              label='아이디'
              name='id'
              autoComplete='id'
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='비밀번호'
              type='password'
              id='password'
              autoComplete='비밀번호'
            />

            <FormControlLabel
              control={<Checkbox value='remember' />}
              label='자동로그인'
              className={classes.label}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              로그인
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' className={classes.link}>
                  아이디/비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2' className={classes.link}>
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </ThemeProvider>
    </Container>
  )
}

export default LoginPage