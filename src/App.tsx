import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Tags from './views/Tags'
import Money from './views/Money'
import Statistics from './views/Statistics'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Money />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>页面不存在，你丫输错地址了吧！</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
