import Layout from '../components/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'
import { TagsSection } from './Money/TagsSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'
import { useRecords } from 'hooks/useRecords'
import dayjs from 'dayjs'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CategoryWrapper = styled.div`
  background-color: #c4c4c4;
`

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
  createdAt: new Date().toISOString().substring(0, 10)
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const { addRecord } = useRecords()

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }

  return (
    <>
      <MyLayout scrollTop={9999}>
        <TagsSection value={selected.tagIds}
          onChange={tagIds => onChange({ tagIds })} />
        <NoteSection value={selected.note}
          date={dayjs(selected.createdAt).format('YYYY-MM-DD')}
          onValueChange={note => onChange({ note })} 
          onDateChange={createdAt => onChange({ createdAt })} 
          />
        <CategoryWrapper>
          <CategorySection value={selected.category}
            onChange={category => onChange({ category })} />
        </CategoryWrapper>
        <NumberPadSection value={selected.amount}
          onChange={amount => onChange({ amount })}
          onOk={submit} />
      </MyLayout>
    </>
  );
}

export default Money