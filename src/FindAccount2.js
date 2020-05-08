import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <section className="login">
        <div className="container">
        <div className="banner-content">
        <h1><i className="fa fa-smile"></i> GitBook </h1>
      <div className={classes.root} style={{width:"500px", display:"block", margin:"50px auto"}}>
        <AppBar position="static" style={{ width:"500px"}}>
          <Tabs
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="아이디 찾기" href="/drafts" {...a11yProps(0)} style={{fontSize:"15px"}}/>
            <LinkTab label="비밀번호 찾기" href="/trash" {...a11yProps(1)} style={{fontSize:"15px"}}/>
          </Tabs>
        </AppBar>
        <form className="form-signin" style={{backgroundColor:"#fff", opacity:0}}>
            <TabPanel value={value} index={0}>
                <div className="form-group-join">
                    <input name="phone" type="tel" className="form-control-join" placeholder="휴대폰번호"/>
                </div>
                <div className="form-group-join">
                    <input name="username" type="text" className="form-control-join" placeholder="이름"/>
                </div>
                <div className="form-group-join">
                    <div className="row">
                    <input name="email" type="text" className="form-control-join" placeholder="이메일"/>
                    <button className="kafe-btn kafe-btn-mint form-group-join-btn">인증</button>
                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            비밀번호 찾기
            <hr/>
            비밀번호를 찾고자 하는 아이디를 입력해 주세요.
            <div className="form-group-join">
                <input name="password" type="password" className="form-control-join-email"/>
                <button className="kafe-btn kafe-btn-mint form-group-join-btn">확인</button>
            </div>
            </TabPanel>

        </form>
     
        </div>
      </div>
      </div>
      </section>
    );
  }
