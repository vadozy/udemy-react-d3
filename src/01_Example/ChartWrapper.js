import React from 'react';
import D3Chart from './D3Chart';

export default class ChartWrapper extends React.Component {
  refChart = React.createRef();

  componentDidMount() {
    new D3Chart(this.refChart.current);
  }

  render() {
    return <div ref={this.refChart} />;
  }
}
