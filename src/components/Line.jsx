import Konva from "konva";
import React, { useState, useRef } from "react";

// Suppose to initialize stage
// const stage = new Konva.Stage({
//   width: 500,
//   height: 800,
//   container: 'containerId' // or "#containerId" or ".containerClass"
// });

const stageEl = React.createRef();
const layerEl = React.createRef();
console.log('This is stageEl: ', stageEl);
export const addLine = (stage, layer, mode = "brush") => {
  let isPaint = false;
  let lastLine;
  stage.on("mousedown touchstart", function (e) {
    isPaint = true;
    let pos = stage.getPointerPosition();
    lastLine = new Konva.Line({
      stroke: mode == "brush" ? "red" : "white",
      strokeWidth: mode == "brush" ? 5 : 20,
      globalCompositeOperation:
        mode === "brush" ? "source-over" : "destination-out",
      points: [pos.x, pos.y],
      draggable: mode == "brush",
    });
    layer.add(lastLine);
  });
  stage.on("mouseup touchend", function () {
    isPaint = false;
  });
  stage.on("mousemove touchmove", function () {
    if (!isPaint) {
      return;
    }
    const pos = stage.getPointerPosition();
    let newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
    layer.batchDraw();
  });
};

// this should draw a line with a thinner line;
// by default mode will take in the value "brush" which draws a non-white line;
// export const drawLine = () => {
//   console.log('This is stageEl: ', stageEl);
//   addLine(stageEl.current.getStage(), layerEl.current);
// };

// this should use a thicker line to draw a white line over the canvas;
// having the additional 'erase' args as the mode;
// export const eraseLine = () => {
//   addLine(stageEl.current.getStage(), layerEl.current, "erase");
// };

// export default LineComponent;