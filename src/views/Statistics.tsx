import Layout from '../components/Layout'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { RecordItem, useRecords } from 'hooks/useRecords';
import { useTags } from 'hooks/useTags';
import { CategorySection } from './Money/CategorySection';
import day from 'dayjs'
import { Chart } from 'components/Chart';
import _ from 'lodash'
import clone from 'lib/clone';
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
  background-color: white;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
      margin-right: auto;
      margin-left: 16px;
      color: #999;
  }
`

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

const ChartWrapper = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`


function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()

  const hash: { [K: string]: RecordItem[] } = {}
  const selectedRecords = records.filter(r => r.category === category)

  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return 1
    return 0
  })

  const keyValueList = () => {
    const today = new Date()
    const array = []
    for(let i = 0; i <= 29; i++){
      const dateString = day(today).subtract(i, 'day').format('YYYY-MM-DD')
      const found = _.find(records, {
        createdAt : dateString
      })
      array.push({
        key: dateString,
        value: found ? found.amount : 0
      })
    }
    array.sort((a, b) => {
      if(a.key > b.key){
        return 1
      }else if(a.key === b.key){
        return 0
      }else{
        return -1
      }
    })
    return array
  }

  const keys = keyValueList().map(item => item.key)
  const values = keyValueList().map(item => item.value)

  const chartOptions = {
    tooltip: {
      show: true,
      triggerOn: 'click',
      position: 'top',
      formatter: '{c}'
    },
    grid: {
      left: 0,
      right: 0
    },
    xAxis: {
      type: 'category',
      data: keys,
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#666'
        }
      },
      axisLabel: {
        formatter: function(value: string, index: number){
          return value.substring(5)
        }
      }
    },
    yAxis: {
      type: 'value',
      show: false,
      itemStyle: {
        borderWidth: 1,
        color: '#666',
        borderColor: '#666'
      }
    },
    series: [
      {
        symbolSize: 12,
        type: 'line',
        symbol: 'circle',
        data: values,
        itemStyle: {
          borderWidth: 1,
          color: '#666',
          borderColor: '#666'
        }
      }
    ]
  }

  const groupedList = () => {
    const newList = clone(selectedRecords).sort((a, b) => {
      if(a.createdAt < b.createdAt){
        return -1
      }else if(a.createdAt === b.createdAt){
        return 0
      }else{
        return 1
      }
    })
    let previousDate
    let outputs = []
    for(let i = 0; i < newList.length; i++){
      if(newList[i].createdAt === previousDate){
        outputs[outputs.length - 1].value += newList[i].amount
      }else{
        outputs.push({date: newList[i].createdAt, value: newList[i].amount})
        previousDate = newList[i].createdAt
      }  
    }
    console.log("outputs")
    console.log(outputs)
    console.log("newList")
    console.log(newList)
    console.log("selectedRecords")
    console.log(selectedRecords)
    return outputs
  }

  groupedList()

  const wrapper = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const div = wrapper.current
    if(div === null) {return}
    div.scrollLeft = div.scrollWidth
  }, [])

  return (
    <>
      <Layout>
        <CategoryWrapper>
          <CategorySection value={category}
            onChange={value => setCategory(value)} 
          />
        </CategoryWrapper>
        <ChartWrapper ref={wrapper}>
          <Chart option={chartOptions}/>
        </ChartWrapper>
        {array.map(([date, records]) => <div>
          <Header>{date}</Header>
          <div>
            {records.map(r => {
              return <Item key={r.createdAt}>
                <div className="tags oneLine">
                  {r.tagIds
                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((result, span, index, array) => 
                      result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>
            })}
          </div>
        </div>)}
      </Layout>
    </>
  );
}

export default Statistics