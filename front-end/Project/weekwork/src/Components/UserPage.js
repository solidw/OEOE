import React from "react";
import AlarmIcon from "@material-ui/icons/Alarm";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { withStyles } from "@material-ui/core/styles";
import {
  lightBlue,
  indigo,
  grey,
  blueGrey,
  red,
} from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Progressbar from "../StyleComponents/Progressbar";

const EnterButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[500],
    "&:hover": {
      backgroundColor: lightBlue[50],
    },
    width: 400,
    height: 57,
    fontSize: 25,
  },
}))(Button);

const ExitButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    "&:hover": {
      backgroundColor: blueGrey[400],
    },
    width: 400,
    height: 57,
    fontSize: 25,
  },
}))(Button);

const UserPage = () => {
  return (
    <Container maxWidth="sm">
      <Box border={1} width={402} borderColor={"#bdbdbd"} bgcolor={"#eeeeee"}>
        <Box
          fontSize={30}
          color={grey[800]}
          display="flex"
          justifyContent="center"
          m={1}
        >
          2019년 10월 22일
        </Box>

        <Box mt={1} mb={3} display="flex" justifyContent="center">
          <Box mt={2} textAlign="center">
            <Box
              mt={1}
              fontSize={30}
              bgcolor={grey[500]}
              color="white"
              width={200}
            >
              <Box display="inline">
                <AlarmIcon />
              </Box>
              <Box display="inline">10:10:02</Box>
            </Box>
          </Box>
        </Box>

        <Box m={2}>
          <Box display="flex" justifyContent="center" color={grey[800]} fontWeight="bold">
            15시간/52시간
          </Box>
          <Progressbar></Progressbar>
        </Box>

        <Box m={2}>
          <Box display="flex" justifyContent="center">
            <EnterButton>
              <DirectionsWalkIcon display="inline" />
              출근등록
            </EnterButton>
          </Box>
        </Box>

        <Box m={2}>
          <Box display="flex" justifyContent="center">
            <ExitButton>
              <DirectionsRunIcon display="inline" />
              퇴근등록
            </ExitButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserPage;
