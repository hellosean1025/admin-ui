import React from 'react';

import ContentBox from "website/components/contentBox";
import Board from './components/Board.js';

export default function DragStudy(){
  return <ContentBox title="拖动学习">

    <ContentBox.Item>
      <div style={{height:300,width:300}}>
        <Board knightPosition={[7, 4]} />
      </div>
      
    </ContentBox.Item>


  </ContentBox>

}