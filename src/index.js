import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./style/theme.less";
import "./style/common.scss";

import App from "./containers/index";

import Model from './model'

const store = Model.getStore()


render(
  <Provider store={store}>
    <App />
  </Provider>
  , 
  document.getElementById("root")
);

if(process.env.NODE_ENV === 'development'){
  if (module.hot) {
    module.hot.accept();
  }
}
