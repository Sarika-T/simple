import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset } from '../../MockData/mackData';

const valueFormatter = (value) => `${value / 1000}k`;

const chartSetting = {
  yAxis: [
    {
      label: 'amount',
      valueFormatter,
    },
  ],
  series: [{ dataKey: 'amount', label: 'Amount' }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ width: '100%', height: '150px' }}>
      <BarChart
        dataset={dataset}
        className="bargraph-set"
        xAxis={[
          { scaleType: 'band', dataKey: 'Day',tickPlacement,tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
