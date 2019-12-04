// This is just trying to create a custom shape with Konva;
import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Image, Text } from 'react-konva';

class Canvas extends Component {
  // stage = new Konva.Stage({
  //   container: "hex",
  //   width: 250,
  //   height: 250
  // });

  // create a layer
  // layer = new Konva.Layer();

  // create shape
  // pentagon = new Konva.RegularPolygon({
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

  //  add the shape to the layer
  // layer.add(pentagon);

  // add the layer to the stage
  // stage.add(layer);

  // draw the image
  // layer.draw();

  render() {
    return (
      <div id="hex">
        <Layer>
          <Text text="this should display before hex" />
          <Image image={this.pentagon} />
        </Layer>
      </div>
    )
  }
}
  // <canvas ref={canvasHex => this.canvasHex = canvasHex }> </canvas>

export default Canvas;