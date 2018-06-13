import React from "react";
import "./index.scss";
import { Icon, Col } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sider = props => {
  let matchUrl = props.matchUrl;
  const onChange = key => {
    return function() {
      if (key !== props.curKey) {
        if (typeof props.onChange === "function") {
          props.onChange.call(this, key);
        }
      }
    };
  };
  return (
    <Col span="6" className="box-sider">
      <div className="menu-box">
        <dl className="menu">
          {props.menus.map(item => {
            return (
              <dt
                className={
                  "menu-item " + (props.curKey === item.key ? "selected" : "")
                }
                key={item.key}
              >
                <Link
                  onClick={onChange(item.key)}
                  to={`${matchUrl}/${item.key}`}
                >
                  <Icon className="item-icon" type={item.icon} />
                  {item.title}
                </Link>
              </dt>
            );
          })}
        </dl>
      </div>
    </Col>
  );
};

Sider.propTypes = {
  matchUrl: PropTypes.string,
  curKey: PropTypes.string,
  onChange: PropTypes.func,
  menus: PropTypes.array
};

export default Sider;
