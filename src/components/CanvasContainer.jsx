import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';

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

  //   stage = new Konva.Stage({
      
  //   })
  //   pentagon = new Konva.RegularPolygon({
  //   x: stage.width() / 2,
  //   y: stage.height() / 2,
  //   sides: 5,
  //   radius: 70,
  //   fill: 'red',
  //   stroke: 'black',
  //   strokeWidth: 4,
  //   shadowOffsetX: 20,
  //   shadowOffsetY: 25,
  //   shadowBlur: 40,
  //   opacity: 0.5
  // });
  styles = {
    width: 250,
    height: 300
  };
  

  render() {
    return (
        <Stage width={this.styles.width} height={this.styles.height}>
          <Layer>
            <Text text="Try to drag a star" />
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                x={Math.random() * 250}
                y={Math.random() * 250}
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