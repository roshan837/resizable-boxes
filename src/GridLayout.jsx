import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const ResizableHandles = () => {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    const generateLayout = () => {
      const availableHandles = ["s", "w", "e", "n"];
      return [
        { x: 0, y: 0, w: 6 },
        { x: 6, y: 0, w: 6 },
        { x: 0, y: 1, w: 12 },
      ].map((x, i) => {
        return {
          x: x.x,
          y: x.y,
          w: x.w,
          h: 2,
          i: i.toString(),
          resizeHandles: availableHandles,
        };
      });
    };
    setLayout(generateLayout());
  }, []);

  return (
    <ReactGridLayout layout={layout}>
      {layout.map((item, i) => (
        <div key={i}>{i}</div>
      ))}
    </ReactGridLayout>
  );
};

export default ResizableHandles;
