const numberMonth = new Date().getMonth();
const numDate = new Date().getDate();
const year = new Date().getFullYear();
const month = new Intl.DateTimeFormat('ru-RU', { month: 'long'}).format();

const date = {
  numDate,
  year,
  month,
  numberMonth,
  choiceDate: (year, month, day) => new Intl.DateTimeFormat("ru").format(new Date(year, month, day)),
  nameMonth: (year, month) => new Intl.DateTimeFormat('ru-RU', { month: 'long'}).format(new Date(year, month))
}

// console.log(new Intl.DateTimeFormat("ru").format(new Date(year, month, numDate)));
// console.log(new Intl.DateTimeFormat('ru-RU', { month: 'long'}).format(new Date(year, month)));

function dayOfMonth(year, month) {
  const date = new Date(year, month, 0);
  const numDate = date.getDate();
  let arrDay = [];

  for (let i = 1; i <= numDate; i++) {
    arrDay.push(i);
  };

  return arrDay;
}

function monthInWeeks(numberMonth) {
  const numMonth = numberMonth + 1;
  const arrCurDays = dayOfMonth(year, numMonth);
  const arrPrevDays = new Date(year, numMonth - 1, 0).getDate();
  const wd = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const weeks = {
    first: [],
    second: [],
    third: [],
    fourth: [],
    fifth: [],
    sixth: []
  };

  for (let i = 0; i < arrCurDays.length; i++) {
    let firstDayMonth = new Date(year, numberMonth, arrCurDays[i]);
    let firstDayMonthOfWeek = new Intl.DateTimeFormat("ru-RU", {
      weekday: "short"
    }).format(firstDayMonth);

    const day = {
      numDay: arrCurDays[i],
      curDay: 'this'
    }

    if (weeks.first.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.first[index] = day;
        }
      });
    } else if (weeks.second.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.second[index] = day;
        }
      });
    } else if (weeks.third.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.third[index] = day;
        }
      });
    } else if (weeks.fourth.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.fourth[index] = day;
        }
      });
    } else if (weeks.fifth.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.fifth[index] = day;
        }
      });
    } else if (weeks.sixth.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.sixth[index] = day;
        }
      });
    }
  }

  let prevDay = arrPrevDays;
  for (let i = 6; i >= 0; i -= 1) {
    if (!weeks.first[i]) {
      const day = {
        numDay: prevDay,
        curDay: 'prev'
      }
      weeks.first[i] = day;
      prevDay -= 1;
    }
  }

  let count = 0;
  for (let i = 0; i < 7; i++) {
    if (!weeks.fifth[i]) {
      count += 1;
      const day = {
        numDay: count,
        curDay: 'next'
      }
      weeks.fifth[i] = day;
    }
  }
  
  for (let i = 0; i < 7; i++) {
    if (!weeks.sixth[i]) {
      count += 1;
      const day = {
        numDay: count,
        curDay: 'next'
      }
      weeks.sixth[i] = day;
    }
  }

  return weeks;
}

export {date, monthInWeeks};
