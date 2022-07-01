import React from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

type Props = {
  options: EChartsOption;
}

const Chart: React.FC<Props> = (props) => {
    console.log(props)
}

export { Chart }
