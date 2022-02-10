import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import Nav from './components/Nav'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </div>
  );
}
function Money() {
  return (
    <>
      <main>
        <h2>记账页</h2>
      </main>
    </>
  );
}

function Tags() {
  return (
    <>
      <main>
        <h2>标签页</h2>
      </main>
    </>
  );
}

function Statistics() {
  return (
    <>
      <main>
        <h2>统计页</h2>
      </main>
    </>
  );
}
export default App;
