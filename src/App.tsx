import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Tags from './views/Tags'
import Money from './views/Money'
import Statistics from './views/Statistics'
import styled from "styled-components";
import { Tag } from "views/Tag";


const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route index element={<Money />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/tags/:tag" element={<Tag />} />
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
    </AppWrapper>
  );
}

export default App;
