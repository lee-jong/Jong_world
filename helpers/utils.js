export const dotdotdot = (text, maxLength = 96) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

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
