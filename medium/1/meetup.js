const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const findDaysInAMonth = (year, monthIdx) => {
  let nextMonthDate = new Date(year, monthIdx + 1, 1);
  return new Date(nextMonthDate - 1).getDate();
}

const meetupDay = (year, monthIdx, day, descriptor) => {
  let start;
  let end;
  let daysInAMonth = findDaysInAMonth(year, monthIdx);

  switch (descriptor) {
    case "teenth":
      start = 13;
      end = 19;
      break;
    case "1st":
      start = 1;
      end = 7;
      break;
    case "2nd":
      start = 8;
      end = 14;
      break;
    case "3rd":
      start = 15;
      end = 21;
      break;
    case "4th":
      start = 22;
      end = 28;
      break;
    case "5th":
      start = 29;
      end = 31;
      break;
    case "last":
      start = (daysInAMonth - 6);
      end = daysInAMonth;
      break;
  }

  while (start <= end) {
    let currentDate = new Date(year, monthIdx, start)
    let currentDay = DAYS[currentDate.getDay()];

    if (start > daysInAMonth) {
      throw new Error();
    }

    if (currentDay === day) {
      return currentDate;
    }

    start++;
  }
  throw new Error();
}

module.exports = meetupDay;
