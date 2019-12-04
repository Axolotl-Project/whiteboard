import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';
// import ReactCanvas from 'react-canvas';

// const Surface = ReactCanvas.Surface;
// const Group = ReactCanvas.Group;
// const Text = ReactCanvas.Text;

export default class CanvasContainer extends Component {
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  render() {
    // const surfaceWidth = window.innerWidth;
    // const surfaceHeight = window.innerHeight;
    // const textStyle = this.getTextStyle();
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try to drag a star" />
            {[...Array(10)].map((_, i) => (
              <Star
                key={i}
                x={Math.random() * window.innerWidth}
                y={Math.random() * window.innerHeight}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={Math.random() * 180}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              />
            ))}
          </Layer>
        </Stage>
    );
  }
}