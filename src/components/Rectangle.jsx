import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

export default class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="give rect solid border" fontSize={15} />
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="grey"
            shadowBlur={10}
          />
        </Layer>
      </Stage>
    );
  }
}