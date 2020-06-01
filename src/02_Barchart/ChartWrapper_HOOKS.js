import React, { useState, useEffect, useRef } from 'react';
import D3Chart from './D3Chart';
import * as d3 from 'd3';

let menData = null;
let womenData = null;

export default function ChartWrapper(props) {
  const refChart = useRef(null);
  const [d3Chart, setChart] = useState(null);
  useEffect(() => {
      const chart = new D3Chart(refChart.current);
      setChart(chart);
      Promise.all([
        d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
        d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json")
      ]).then((datasets) => {
        menData = datasets[0]
        womenData = datasets[1]
        chart.update('men', menData)
      })
  }, []);

  if (menData && womenData) {
    if (props.gender === 'men') {
      d3Chart.update(props.gender, menData);
    } else {
      d3Chart.update(props.gender, womenData);
    }
  }

  return <div ref={refChart} />;
}
