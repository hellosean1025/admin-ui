import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Dropdown, Icon } from "antd";
const Header = Layout.Header;
import "./index.scss";
import { Link } from "react-router-dom";

const HeaderBox = props => {
  const onNavChange = nav => {
    return function() {
      if (nav !== props.curNav) {
        if (typeof props.onNavChange === "function") {
          props.onNavChange.call(this, nav);
        }
      }
    };
  };

  return (
    <Header className="box-header">
      <div className="logo">
        <Link to="/">{props.title}</Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[props.curNav]}
        className="navs"
      >
        {props.navs.map(item => {
          return (
            <Menu.Item key={item.key}>
              <Link onClick={onNavChange(item.key)} to={"/" + item.key}>
                {item.title}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>

      <div className="ctrls">
        <Dropdown overlay={props.menus} placement="bottomRight">
          <a className="ant-dropdown-link" href="#">
            {props.username || "Guest"} <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

HeaderBox.propTypes = {
  curNav: PropTypes.string,
  username: PropTypes.string,
  onNavChange: PropTypes.func,
  title: PropTypes.title,
  navs: PropTypes.array,
  menus: PropTypes.array
};

export default HeaderBox;
