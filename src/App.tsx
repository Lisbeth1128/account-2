import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
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
function Money() {
  return (
    <>
      <main>
        <h2>记账页</h2>
      </main>
      <nav>
        <Link to="/">记账页</Link>
        <Link to="/tags">标签页</Link>
        <Link to="/statistics">统计页</Link>
      </nav>
    </>
  );
}

function Tags() {
  return (
    <>
      <main>
        <h2>标签页</h2>
      </main>
      <nav>
        <Link to="/">记账页</Link>
        <Link to="/tags">标签页</Link>
        <Link to="/statistics">统计页</Link>
      </nav>
    </>
  );
}

function Statistics() {
  return (
    <>
      <main>
        <h2>统计页</h2>
      </main>
      <nav>
        <Link to="/">记账页</Link>
        <Link to="/tags">标签页</Link>
        <Link to="/statistics">统计页</Link>
      </nav>
    </>
  );
}
export default App;
