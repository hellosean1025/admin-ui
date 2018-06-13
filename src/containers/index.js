import React from "react";
import PropTypes from 'prop-types'
import { Menu, Row, Button  } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import Model from "website/model";

import Header from "website/components/header";
import Footer from "./footer";

import Home from "./home";
import Utils from '../utils'

const navs = [
  {
    key: "home",
    title: "基本信息",
    component: Home
  },
  {
    key: "data",
    title: "数据分析",
    component: function Data(){return <h1>数据分析</h1>}
  },
  {
    key: "setting",
    title: "系统设置",
    component: function Setting(){return <h1>设置</h1>}
  }
];

const handleLogin = Utils.debounce(() => {
  setTimeout(()=>{
    Model.baseinfo.setLoginDataAction({
      isLogin: true,
      username: "tom",
      uid: 999
    });
  },1000)
},500);

const Login = () => {
  return (
    <div>
      <Button onClick={handleLogin}>login</Button>
    </div>
  );
};

const App = props => {
  const navChange = nav => {
    Model.baseinfo.changeNavMenuAction({
      nav: nav,
      menu: "index"
    });
  };
  const isLogin = props.baseinfo.login.isLogin;

  const menus = (
    <Menu style={{width:178,padding:5}}>
      <Menu.Item style={{padding:10}}>
          系统管理
      </Menu.Item>
      <Menu.Item>
          帮助
      </Menu.Item>
      <Menu.Item>
        <Link
          onClick={() => {
            Model.baseinfo.setLoginDataAction({
              isLogin: false
            });
          }}
          to="/"
        >
          退出登录
        </Link>
      </Menu.Item>
    </Menu>
  );

  return isLogin ? (
    <Router>
      <div>
        <Header
          onNavChange={navChange}
          curNav={props.baseinfo.nav}
          title="xxx"
          navs={navs}
          menus={menus}
        />

        <Row>
          <Switch>
            <Redirect exact={true} to={`/home/index`} from="/" />
            {navs.map(item => {
              return (
                <Route
                  key={item.key}
                  path={"/" + item.key}
                  component={item.component}
                />
              );
            })}
          </Switch>
        </Row>

        <Footer />
      </div>
    </Router>
  ) : (
    <Login />
  );
};

App.propTypes = {
  baseinfo: PropTypes.object
}

export default connect(state => ({
  baseinfo: state.baseinfo
}))(App);
