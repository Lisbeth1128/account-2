import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from 'components/Icon'


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
      display: flex;
    > li {
        width: 33.3333%;
        text-align: center;
        > a {
            padding: 4px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon {
              width: 24px;
              height: 24px;
            }
        }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/"><Icon name="money" />记账页</Link>
                </li>
                <li>
                    <Link to="/tags"><Icon name="tag" />标签页</Link>
                </li>
                <li>
                    <Link to="/statistics"><Icon name="chart" />统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav