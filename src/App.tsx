import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'




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
function Money() {
  return (
    <>
      <Layout>
        <h2>记账页</h2>
      </Layout>
    </>
  );
}

function Tags() {
  return (
    <>
      <Layout>
        <h2>标签页</h2>
      </Layout>
    </>
  );
}

function Statistics() {
  return (
    <>
      <Layout>
        <h2>统计页</h2>
      </Layout>
    </>
  );
}
export default App;
