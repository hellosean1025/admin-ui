import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'antd';
import './index.scss';


const Content =  (props) => {
  return (
    <Col span="18" className="box-content">
      <div className="content-inner">
        <div className="main-head">
          <h1>{props.title}</h1>
        </div>

        <div className="main-body">
          {props.children}
        </div>
      </div>
    </Col>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

Content.Item = (props) =>{
  return <div className="main-body-item">
    {props.children}
  </div>
}

Content.Item.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
export default Content;
