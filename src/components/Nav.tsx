import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  display: flex;
  > ul {
    width: 33.3333%;
      text-align: center;
      padding: 16px;
  }
`

const Nav = () => {
    return (
        <NavWrapper>
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
        </NavWrapper>
    )
}

export default Nav