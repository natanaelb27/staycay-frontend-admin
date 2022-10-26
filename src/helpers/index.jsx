import moment from 'moment';

export const numberWithCommas = (number) => `${parseInt(number, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')},00`;
export const getDayBetweenDates = (checkInDate, checkOutDate) => moment(checkInDate).diff(moment(checkOutDate), 'days');
export const getDatesBetween = (startDate, lastDate) => {
  const dateArray = [];
  let currentDate = moment(startDate);
  const stopDate = moment(lastDate);
  while (currentDate <= stopDate) {
    dateArray.push(new Date(moment(currentDate).format('YYYY-MM-DD')));
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
};

export const dateToDateStringArray = (dateArray) => {
  const newDateArray = [];
  dateArray.map((item) => newDateArray.push(item.toDateString()));
  return newDateArray;
};
