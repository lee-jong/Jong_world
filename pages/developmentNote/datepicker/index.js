import React from 'react';
import { getDate, getDays, dayOfWeek } from '../../../helpers/utils';
class DataPicker extends React.Component {
  static async getInitialProps({}) {
    return {};
  }

  state = {
    defaultYear: getDate(new Date(), 'YY'),
    year: getDate(new Date(), 'YY'),
    month: getDate(new Date(), 'MM'),
    day:
      getDate(new Date(), 'DD') +
      ',' +
      dayOfWeek(getDate(new Date(), 'YYMMDD')),
    days: getDays(getDate(new Date(), 'YY')),
    time: getDate(new Date(), 'HH') + ':00'
  };

  getMonth = () => {
    const { days } = this.state;
    return days.map(m => <option key={m.month}>{m.month}</option>);
  };

  getDay = () => {
    const { year, days, month } = this.state;
    let getLastDay = days[month - 1].lastDay;
    let getDays = [];
    for (let i = 1; i <= getLastDay; i++) {
      getDays.push(
        <option key={i}>
          {i + ',' + dayOfWeek(year + '-' + month + '-' + i)}
        </option>
      );
    }
    return getDays;
  };

  getTime = () => {
    let getTimes = [];
    for (let i = 0; i <= 23; i++) {
      if (i <= 9) {
        getTimes.push(<option key={i}>{'0' + i}:00</option>);
      } else {
        getTimes.push(<option key={i}>{i}:00</option>);
      }
    }
    return getTimes;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { month, day, defaultYear, time } = this.state;
    return (
      <>
        <div>
          <h2>DatePicker</h2>
        </div>
        <div className="dataPicker-content">
          <select
            defaultValue={defaultYear}
            name="year"
            onChange={this.handleChange}
          >
            <option>{defaultYear}</option>
            <option>{defaultYear + 1}</option>
          </select>
          년
          <select
            defaultValue={month}
            name="month"
            onChange={this.handleChange}
          >
            {this.getMonth()}
          </select>
          월
          <select defaultValue={day} name="day" onChange={this.handleChange}>
            {this.getDay()}
          </select>
          일
          <select defaultValue={time} name="time" onChange={this.handleChange}>
            {this.getTime()}
          </select>
          시
        </div>
      </>
    );
  }
}

export default DataPicker;
