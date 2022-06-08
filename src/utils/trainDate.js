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