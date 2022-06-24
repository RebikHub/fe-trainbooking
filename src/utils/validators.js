export function validateName(string) {
  return !/[\d\s]/.test(string);
};

export function validateDate(string) {
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(string)) {
    const arrDate = string.split('.');
    const dateNow = new Date().getTime();
    const dateString = new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`).getTime();
    return dateNow > dateString;
  };
  return false;
};

export function validatePassportSeries(string) {
  return /^\d{4}$/.test(string);
};

export function validatePassportNumber(string) {
  return /^\d{6}$/.test(string);
};

export function validateBirthNumber(string) {
  return /^[v,i,x,m]{1,4}[а-я]{1,2}\d{6}$/.test(string);
};