import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background-color: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 18px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'}
  const [categoryList] = useState<('+' | '-')[]>(['-', '+'])
  const [category, setCategory] = useState('-')
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => 
          <li className={category === c ? 'selected' : ''}
              onClick={() => {setCategory(c)}}
              key = {c}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export { CategorySection }