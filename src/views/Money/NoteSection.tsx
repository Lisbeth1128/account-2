import { Input } from "components/Input";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`
type Props = {
  value: string,
  date: string,
  onValueChange: (value: string) => void,
  onDateChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const createdAt = props.date
  const onValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onValueChange(e.target.value)
  }
  const onDateChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onDateChange(e.target.value)
  }
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onValueChange}
        placeholder="请填写备注"
      />
      <Input label="日期" type="date" value={createdAt} onChange={onDateChange}
        placeholder="请填写日期"
      />
    </Wrapper>
  )
}

export { NoteSection }