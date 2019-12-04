import React, { Component } from 'react';
import ToolBar from './ToolBar';
import CanvasContainer from './CanvasContainer';



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
      </div>
    );
  }
}


export default ApiContainer;