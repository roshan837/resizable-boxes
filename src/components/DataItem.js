import { useState } from "react";
import axios from "axios";
import "./styles/data.css";

export default function DataItem({ item }) {
  const [data, setData] = useState(item.text);

  const onUpdate = (e) => {
    e.stopPropagation(); // Prevent event propagation
    e.preventDefault();
    // Implement the update functionality here
    const updatedData = prompt("Update data:", data);
    if (updatedData) {
      axios
        .put(
          `https://resizable-api.onrender.com/data/update/${
            item?._id || "new"
          }`,
          {
            text: updatedData,
          }
        )
        .then((response) => {
          setData(updatedData);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  };

  const onAdd = (e) => {
    e.stopPropagation(); // Prevent event propagation
    e.preventDefault();
    // Implement the add functionality here
    const newData = prompt("Enter new data:");
    if (newData) {
      axios
        .post("https://resizable-api.onrender.com/data/add", { text: newData })
        .then((response) => {
          setData(newData);
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
    }
  };

  return (
    <div className="data-container">
      <div>{data}</div>
      <div>
        <button onMouseDown={onAdd}>Add</button>
        <button onMouseDown={onUpdate}>Update</button>
      </div>
    </div>
  );
}
