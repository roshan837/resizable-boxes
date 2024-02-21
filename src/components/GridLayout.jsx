import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import DataItem from "./DataItem";
import "./styles/datagrid.css";
const ReactGridLayout = WidthProvider(RGL);
const ResizableHandles = () => {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    const handles = ["s", "w", "e", "n"];
    setLayout([
      {
        x: 0,
        y: 0,
        w: 6,
        resizeHandles: handles,
        h: 2,
        i: "0",
        text: "component-1",
      },
      {
        x: 6,
        y: 0,
        w: 6,
        resizeHandles: handles,
        h: 2,
        i: "1",
        text: "component-2",
      },
      {
        x: 0,
        y: 1,
        w: 12,
        resizeHandles: handles,
        h: 2,
        i: "2",
        text: "component-3",
      },
    ]);
  }, []);

  return (
    <ReactGridLayout layout={layout}>
      {layout.map((item) => (
        <div key={item.i}>
          <DataItem item={item} />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default ResizableHandles;
