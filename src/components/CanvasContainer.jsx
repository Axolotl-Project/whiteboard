import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Konva from 'konva';
import { Stage, Layer, Star, Text, Line } from 'react-konva';
import { addLine, drawLine, eraseLine } from './Line.jsx';

export default class CanvasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mStart: {x: 0, y:0},
      arr: []
    };
  }
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

  initialState = (e) => this.setState({
    mStart: {x: e.evt.clientX, y:e.evt.clientY}
  });

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

  
  styles = {
    width: 600,
    height: 600
  }
  
  render() {
            const array = [...Array(5)].map((_, i) => (
              <Star
                key={i}
                x={Math.random() * 500}
                y={Math.random() * 500}
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
            ));
    // const stage = new Konva.Stage({
    //   width: 500,
    //   height: 800,
    //   container: 'containerId' // or "#containerId" or ".containerClass"
    // });
    
    const stageEl = React.createRef();
    const layerEl = React.createRef();
    
    const drawLine = () => {
      console.log('This is stageEl: ', stageEl);
      addLine(stageEl.current.getStage(), layerEl.current);
    };

    const eraseLine = () => {
      addLine(stageEl.current.getStage(), layerEl.current, "erase");
    };
    
    return(
      <div id="containerId">
      <Button onClick={drawLine}>
        Line
      </Button>
      <Button onClick={eraseLine}>
        Erase
      </Button>
      <Stage width={this.styles.width} height={this.styles.height} >
        <Layer>
          <Text text="Try to drag a star" />
          {array}
          {this.state.arr}
        </Layer>
      </Stage>
      </div>
    );
  }
}