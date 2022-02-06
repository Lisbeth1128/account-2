import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid re;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  border: 1px solid blue;
  display: flex;
  > ul {
    width: 33.3333%;
      text-align: center;
      padding: 16px;
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/">记账页</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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
