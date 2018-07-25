import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/js/highcharts';
import { withHighcharts, PieSeries, HighchartsChart, Chart, Title, Subtitle, Legend, XAxis, YAxis, LineSeries } from 'react-jsx-highcharts';

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      holdings: {}
    }
  }

  render() {
    const plotOptions = {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    };

    return (
      <HighchartsChart plotOptions={plotOptions}>
        <Chart backgroundColor={null} />
        <PieSeries name="Portfolio" data={this.props.data} size={250} />
      </HighchartsChart>
    );
  }
}

export default withHighcharts(PieChart, Highcharts);
