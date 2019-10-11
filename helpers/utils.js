export const getDate = (date, type) => {
  let prototypeDate = new Date(date);

  let dayDate =
    prototypeDate.getDate() < 10
      ? '0' + prototypeDate.getDate()
      : prototypeDate.getDate();

  let yearDate = prototypeDate.getFullYear();

  let monthDate =
    prototypeDate.getMonth() + 1 < 10
      ? '0' + (prototypeDate.getMonth() + 1)
      : prototypeDate.getMonth() + 1;

  let hours =
    prototypeDate.getHours() < 10
      ? '0' + prototypeDate.getHours()
      : prototypeDate.getHours();

  let minutes =
    prototypeDate.getMinutes() < 10
      ? '0' + prototypeDate.getMinutes()
      : prototypeDate.getMinutes();

  let seconds =
    prototypeDate.getSeconds() < 10
      ? '0' + prototypeDate.getSeconds()
      : prototypeDate.getSeconds();

  let resDate = '';

  switch (type) {
    case 'YY':
      resDate = yearDate;
      break;

    case 'MM':
      resDate = monthDate;
      break;

    case 'DD':
      resDate = dayDate;
      break;

    case 'HH':
      resDate = hours;
      break;

    case 'YYDD':
      resDate = yearDate + '-' + monthDate;
      break;

    case 'YYMMDD':
      resDate = yearDate + '-' + monthDate + '-' + dayDate;
      break;

    case 'YYMMDDHH':
      resDate = yearDate + '-' + monthDate + '-' + dayDate + hours;
      break;

    case 'YYMMDDHHmm':
      resDate =
        yearDate + '-' + monthDate + '-' + dayDate + hours + ':' + minutes;
      break;

    case 'YYMMDDHHmmSS':
      resDate =
        yearDate +
        '-' +
        monthDate +
        '-' +
        dayDate +
        hours +
        ':' +
        minutes +
        ':' +
        seconds;
      break;
  }

  return resDate;
};

export const getDays = YY => {
  let resDays = [];
  for (let i = 1; i <= 12; i++) {
    let days = { month: i, lastDay: 32 - new Date(YY, i - 1, 32).getDate() };
    resDays.push(days);
  }

  return resDays;
};

export const dayOfWeek = date => {
  // data 의 규격은 'yyyy-mm-dd'
  let week = ['일', '월', '화', '수', '목', '금', '토'];
  return week[new Date(date).getDay()];
};
