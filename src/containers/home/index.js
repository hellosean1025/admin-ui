import React from "react";
import PropTypes from "prop-types";
import Sider from "website/components/sider";
import index from "./index/index.js";
import runtime from "./runtime";
import { Route, Switch, Redirect } from "react-router-dom";
import Model from "website/model";
import { connect } from "react-redux";

const menus = [
  {
    title: "概况",
    key: "index",
    icon: "star",
    component: index
  },
  {
    title: "实时统计",
    key: "runtime",
    icon: "heart",
    component: runtime
  },
  {
    title: "访问分析",
    key: "view",
    icon: "notification"
  },
  {
    title: "用户画像",
    key: "user",
    icon: "user"
  }
];

const Home = ({ match, baseinfo }) => {
  return (
    <React.Fragment>
      <Sider
        matchUrl={match.url}
        onChange={menu => {
          Model.baseinfo.changeNavMenuAction({ menu: menu });
        }}
        menus={menus}
        curKey={baseinfo.menu}
      />
      <Switch>
        <Redirect exact={true} to={`${match.url}/index`} from={match.url} />
        {menus.map(item => {
          return (
            <Route
              key={item.key}
              path={`${match.url}/${item.key}`}
              component={item.component}
            />
          );
        })}
      </Switch>
    </React.Fragment>
  );
};

Home.propTypes = {
  match: PropTypes.object,
  baseinfo: PropTypes.object
};

export default connect(state => {
  return {
    baseinfo: state.baseinfo
  };
})(Home);
