export function duration(time) {
  const mins = Math.floor(time/60);
  const hours = Math.floor(mins/60);
  const min = mins - (hours * 60);
  return `${hours}:${min < 10 ? '0' + min : min}`;
};

export function dateFromAndTo(time) {
  return new Date(time * 1000).toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export function timeForSort(time) {
  const date = new Date(time * 1000);
  return (date.getMinutes() + date.getHours() * 60) * 60;
};

export function toDate(time) {
  return new Date(time * 1000).toLocaleDateString();
};

export function dateForComparison(date) {
  console.log(date);
  const splitDate = date.split(".");
  const resultDate = new Date(splitDate[2], Number(splitDate[1]) - 1, splitDate[0]).setDate(splitDate[0]);
  return resultDate / 1000;
};
