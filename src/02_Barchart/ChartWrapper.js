import React from 'react';
import D3Chart from './D3Chart';

export default class ChartWrapper extends React.Component {
  refChart = React.createRef();

  d3Chart = null;

  componentDidMount() {
		this.d3Chart = new D3Chart(this.refChart.current)
	}
  
  render() {
    if (this.d3Chart) {
      this.d3Chart.update(this.props.gender)
    }
    return <div ref={this.refChart} />;
  }
}
