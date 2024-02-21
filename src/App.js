import { useState } from "react";
import GridLayout from "./components/GridLayout.jsx";
import axios from "axios";
const App = () => {
  const [count, setCount] = useState({ addCount: 0, updateCount: 0 });
  const getCount = async () => {
    try {
      // Implement the count functionality here
      const response = await axios.get(
        "https://resizable-api.onrender.com/data/count"
      );
      setCount({ ...response.data });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <div>
      <GridLayout />
      <div className="count-container">
        <div className="count-box">
          <span>add</span>
          <span>{count.addCount}</span>
        </div>
        <div className="count-box">
          <span>update</span>
          <span>{count.updateCount}</span>
        </div>
        <button onClick={getCount}>Count</button>
      </div>
    </div>
  );
};

export default App;
