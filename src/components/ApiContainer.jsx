import React, { Component } from 'react';
import ToolBar from './ToolBar';
import CanvasContainer from './CanvasContainer';
import Rectangle from './Rectangle';

class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTool: 'ARROW',
    }
  }

  render() {

    return (
      <div className="apiCon">
        <ToolBar />
        <CanvasContainer />
        <Rectangle />
      </div>
    );
  }
}


export default ApiContainer;