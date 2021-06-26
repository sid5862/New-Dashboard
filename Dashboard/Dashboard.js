import React from "react";
import "./Dash.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import CallMadeIcon from "@material-ui/icons/CallMade";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ProgressBar from "react-bootstrap/ProgressBar";
import SendIcon from "@material-ui/icons/Send";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Line, Doughnut } from "react-chartjs-2";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      justifyContent: "center",
    },
    paper: {
      boxShadow: "rgb(82, 79, 79) 0px 1px 3px",
      padding: theme.spacing(2),
      color: "white",
      margin: "2%",
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  const state = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "red",
        borderWidth: 2,
        data: [7, 10, 12, 10, 12, 14, 12],
      },
    ],
  };
  const data = {
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["blueviolet", "#f50057", "#3f51b5"],
      },
    ],
  };
  var x = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var n = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newDate = new Date();
  let day = x[newDate.getDay()];
  let curdate = newDate.getDate();
  let month = n[newDate.getMonth() + 1];
  let year = newDate.getFullYear();
  let date = curdate + " " + month + " " + year;
  return (
    <div>
      <div className={classes.root}>
        <div className="upward">
          <div>
            <h6>Dashboard</h6>
            <p style={{ color: "#3f51b5" }} className="dashpara">
              <span style={{ color: "white" }}>{day}, </span>
              {date}
            </p>
          </div>
          <div className="upright">
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<AddIcon />}
              className=" Addbtn"
            >
              Add
            </Button>
            <input
              type="text"
              className="searchbar"
              placeholder="Search for Application Here"
            >
              {/* <SearchIcon /> */}
            </input>
          </div>
        </div>

        <div className="mainContent">
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <div className="leftGrid">
              <Grid>
                <div className="grid2">
                  <Grid>
                    <div className="firstbox">
                      <div className="application">
                        <p style={{ fontSize: "5px" }}>Total Application</p>
                        <h6>4569</h6>
                        <p
                          style={{
                            color: "blueviolet",
                            display: "flex",
                            marginTop: "1.5rem",
                          }}
                        >
                          <CallMadeIcon fontSize="small" />
                          +3.59%
                        </p>
                      </div>
                      <div className="dognut">
                        <MoreHorizIcon style={{ width: "100%" }} />
                        <br />
                        <CircularProgressbar
                          className="CircularProgress"
                          value={70}
                          text={"70"}
                          styles={buildStyles({
                            pathColor: "blueviolet",
                            textColor: "blueviolet",
                          })}
                        />
                      </div>
                    </div>
                  </Grid>

                  <Grid>
                    <div className="secondbox">
                      <div className="bluebox">
                        <div>
                          <p style={{ fontSize: "5px" }}>
                            Shortlisted Candidates
                          </p>
                          <h6>4569</h6>
                          <p
                            style={{
                              color: "white",
                              display: "flex",
                              marginTop: "1.5rem",
                            }}
                          >
                            <CallMadeIcon fontSize="small" />
                            +3.59%
                          </p>
                        </div>
                        <div className="dognut">
                          <MoreHorizIcon style={{ width: "100%" }} />
                          <br />
                          <CircularProgressbar
                            className="CircularProgress"
                            value={60}
                            text={"60"}
                            styles={buildStyles({
                              pathColor: "rgb(119, 179, 228)",
                              textColor: "white",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid>
                    <div className="thirdbox">
                      <div>
                        <p style={{ fontSize: "5px" }}>Total Application</p>
                        <h6>4569</h6>
                        <p
                          style={{
                            color: "red",
                            display: "flex",
                            marginTop: "1.5rem",
                          }}
                        >
                          <CallMadeIcon fontSize="small" />
                          +3.59%
                        </p>
                      </div>
                      <div className="dognut">
                        <MoreHorizIcon style={{ width: "100%" }} />
                        <br />
                        <CircularProgressbar
                          className="CircularProgress"
                          value={40}
                          text={"40"}
                          styles={buildStyles({
                            pathColor: "red",
                            textColor: "red",
                          })}
                        />
                      </div>
                    </div>
                  </Grid>
                </div>

                <div className="grid3">
                  <Grid>
                    <div className="fourthbox">
                      <Line
                        data={state}
                        options={{
                          title: {
                            display: true,
                            text: "Average Rainfall per month",
                            fontSize: 20,
                          },
                          legend: {
                            display: true,
                            position: "right",
                          },
                        }}
                        options={{ maintainAspectRatio: false }}
                        width={220}
                        height={220}
                      />
                    </div>
                  </Grid>
                  <Grid>
                    <div className="fifthbox">
                      <div
                        style={{ marginLeft: "1rem", marginBottom: "1.5rem" }}
                      >
                        <h6>Total Application </h6>
                      </div>
                      <div style={{ display: "grid", paddingBottom: "3rem" }}>
                        <p
                          className="appStatus"
                          style={{
                            color: "lightblue",
                            display: "flex",
                          }}
                        >
                          <FiberManualRecordIcon
                            fontSize="small"
                            style={{
                              marginTop: "3px",
                              marginRight: "1rem",
                              marginLeft: "5px",
                            }}
                          />
                          Application
                          <ProgressBar
                            variant="progress1"
                            now={50}
                            style={{
                              width: "50%",
                              marginLeft: "2rem",
                              marginTop: "4px",
                              backgroundColor: "#252525",
                            }}
                          />
                        </p>
                        <p
                          className="appStatus"
                          style={{
                            color: "blue",
                            display: "flex",
                          }}
                        >
                          <FiberManualRecordIcon
                            fontSize="small"
                            style={{
                              marginTop: "3px",
                              marginRight: "1rem",
                              marginLeft: "5px",
                            }}
                          />
                          Shortlisted
                          <ProgressBar
                            variant="progress2"
                            now={80}
                            style={{
                              width: "50%",
                              marginLeft: "2rem",
                              marginTop: "4px",
                              backgroundColor: "#252525",
                            }}
                          />
                        </p>
                        <p
                          className="appStatus"
                          style={{
                            color: "green",
                            display: "flex",
                          }}
                        >
                          <FiberManualRecordIcon
                            fontSize="small"
                            style={{
                              marginTop: "3px",
                              marginRight: "1rem",
                              marginLeft: "5px",
                            }}
                          />
                          Rejected
                          <ProgressBar
                            variant="progress3"
                            // color="red"
                            now={50}
                            style={{
                              width: "50%",
                              marginLeft: "2rem",
                              marginTop: "4px",
                              backgroundColor: "#252525",
                            }}
                          />
                        </p>
                        <p
                          className="appStatus"
                          style={{
                            color: "yellow",
                            display: "flex",
                          }}
                        >
                          <FiberManualRecordIcon
                            fontSize="small"
                            style={{
                              marginTop: "3px",
                              marginRight: "1rem",
                              marginLeft: "5px",
                            }}
                          />
                          OnHold
                          <ProgressBar
                            variant="progress4"
                            now={20}
                            style={{
                              width: "50%",
                              marginLeft: "2rem",
                              marginTop: "4px",
                              backgroundColor: "#252525",
                            }}
                          />
                        </p>
                        <p
                          className="appStatus"
                          style={{
                            color: "violet",
                            display: "flex",
                          }}
                        >
                          <FiberManualRecordIcon
                            fontSize="small"
                            style={{
                              marginTop: "3px",
                              marginRight: "1rem",
                              marginLeft: "5px",
                            }}
                          />
                          Appped
                          <ProgressBar
                            variant="progress5"
                            now={80}
                            style={{
                              width: "50%",
                              marginLeft: "2rem",
                              marginTop: "4px",
                              backgroundColor: "#252525",
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </Grid>
                </div>

                <div className="grid4">
                  <Grid>
                    <div className="sixbox">
                      <div className="stats">
                        <p>Referrel and Compaign Stats</p>
                        <div className="send">
                          <SendIcon className="sendicon" />
                          <div>
                            <p style={{ color: "#dc3545" }}>
                              40 Compaign sent in total
                            </p>
                            <p>4 compaign sent in last month</p>
                          </div>
                        </div>
                      </div>
                      <div className="btnsix">
                        <Grid>
                          <div className="six">
                            <p style={{ marginBottom: "1rem" }}>Apppcation</p>
                            <p style={{ color: "blue" }}>
                              <CallMadeIcon fontSize="small" />
                              +3.59%
                            </p>
                            <h6>4569</h6>
                          </div>
                        </Grid>

                        <Grid>
                          <div className="six">
                            <p style={{ marginBottom: "1rem" }}>
                              Users Reached
                            </p>
                            <p style={{ color: "blue" }}>
                              <CallMadeIcon fontSize="small" />
                              +3.59%
                            </p>
                            <h6>4569</h6>
                          </div>
                        </Grid>

                        <Grid>
                          <div className="six">
                            <p style={{ marginBottom: "1rem" }}>Referrel</p>
                            <p style={{ color: "blue" }}>
                              <CallMadeIcon fontSize="small" />
                              +3.59%
                            </p>
                            <h6>4569</h6>
                          </div>
                        </Grid>

                        <Grid>
                          <div className="six">
                            <p style={{ marginBottom: "1rem" }}>Shares</p>
                            <p style={{ color: "blue" }}>
                              <CallMadeIcon fontSize="small" />
                              +3.59%
                            </p>
                            <h6>4569</h6>
                          </div>
                        </Grid>
                      </div>
                      <div className="button">
                        <Button variant="contained" color="secondary">
                          Start a New Compaign Now
                        </Button>
                        <Button variant="contained" color="primary">
                          Pause All Running Compaign
                        </Button>
                      </div>
                    </div>
                  </Grid>

                  <Grid item>
                    <div className="sevenbox">
                      <div className="seven">
                        <div className="piepara">
                          <p>Open Position by Department</p>
                          <MoreHorizIcon />
                        </div>
                        <div className="piechart">
                          <Doughnut
                            data={data}
                            width={220}
                            height={220}
                            options={{ maintainAspectRatio: false }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </div>
              </Grid>

              {/* ................... */}
              <Grid>
                <div className="rightGrid">
                  <div className="block1">
                    <h6>Hello John Bayer</h6>
                    <h6>You have 8 new Application Today</h6>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>2</li>
                      <li>3</li>
                    </ul>
                  </div>
                  <div className="block2">
                    <div className="newApp">
                      <h6>New Applicant</h6>
                      <ChevronRightIcon />
                    </div>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
