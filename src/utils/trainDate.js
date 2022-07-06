export function duration(time) {
  const mins = Math.floor(time/60);
  const hours = Math.floor(mins/60);
  const min = mins - (hours * 60);
  return `${hours}:${min < 10 ? '0' + min : min}`;
};

export function dateFromAndTo(time) {
  const date = new Date(time * 1000);
  const hours = date.getHours();
  const mins = date.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;
};

export function timeForSort(time) {
  const date = new Date(time * 1000);
  return (date.getMinutes() + date.getHours() * 60) * 60;
};

export function toDate(time) {
  const day = new Date(time * 1000).getDate();
  const month = new Date(time * 1000).getMonth() + 1;
  const year = new Date().getFullYear();
  return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month}.${year}`;
};

export function dateForComparison(date) {
  console.log(date);
  const splitDate = date.split(".");
  const resultDate = new Date(splitDate[2], Number(splitDate[1]) - 1, splitDate[0]).setDate(splitDate[0]);
  return resultDate / 1000;
};