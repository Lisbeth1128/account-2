import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';


const Chart = (props: any) => {
  const {option} = props
  const container = useRef(option)
  const chart = useRef(option)
  useEffect(() => {
    if(container.current === null) {return}
    const width = document.documentElement.clientWidth
    container.current.style.width = `${width - 20}px`
    container.current.style.height = `${(width - 20) * 1.2}px`
    chart.current = echarts.init(container.current)
  }, [])
  useEffect(() => {
    chart.current.setOption(option)
  }, [option])
  return (
    <div ref={container} />
  )
}

export { Chart }
