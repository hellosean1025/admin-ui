import React from "react";
import ContentBox from "website/components/contentBox";

export default () => {
  return (
    <ContentBox title="数据统计">
      <ContentBox.Item>
        <h2>最近1个月访问数据</h2>
        <div style={{ height: 500, width: "100%" }} />
      </ContentBox.Item>
    </ContentBox>
  );
};
