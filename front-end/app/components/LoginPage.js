import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { grey } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: grey,
    secondary: {
      main: '#424242'
    }
  }
});

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const LoginPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src="https://pbs.twimg.com/profile_images/1070664386589704192/5XaWZmRW.jpg"
          />
          <Typography component="h1" variant="h5" className={classes.label}>
            Login Page
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="아이디"
              name="id"
              autoComplete="id"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="비밀번호"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              로그인
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  className={classes.link}
                  onClick={handleClickOpen2}
                >
                  아이디/비밀번호 찾기
                </Link>
                <div>
                  <Dialog
                    onClose={handleClose2}
                    aria-labelledby="customized-dialog-title"
                    open={open2}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose2}
                    >
                      아이디 및 비밀번호 찾기
                    </DialogTitle>
                    <DialogContent dividers>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="이름을 입력하세요"
                        name="name"
                        display="inline"
                        autoComplete="name"
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="이메일 주소를 입력하세요"
                        name="useremail"
                        autoComplete="email"
                      />
                    </DialogContent>
                    <Button
                      onClick={handleClose2}
                      color="primary"
                      className={classes.button}
                    >
                      확인
                    </Button>
                  </Dialog>
                </div>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  className={classes.link}
                  onClick={handleClickOpen}
                >
                  회원가입
                </Link>
                <div>
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                    >
                      회원가입 페이지
                    </DialogTitle>
                    <DialogContent dividers>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="namereg"
                        label="이름을 입력하세요"
                        name="NameReg"
                        autoComplete="off"
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userregid"
                        label="아이디를 입력하세요"
                        name="UserRegId"
                        autoComplete="off"
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="UserRegPW"
                        label="비밀번호를 입력하세요"
                        name="UserRegPW"
                        autoComplete="off"
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="이메일 주소를 입력하세요"
                        name="email"
                        autoComplete="email"
                      />
                    </DialogContent>

                    <Button
                      onClick={handleClose}
                      color="primary"
                      className={classes.button}
                    >
                      회원가입
                    </Button>
                  </Dialog>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </ThemeProvider>
    </Container>
  );
};

export default LoginPage;
