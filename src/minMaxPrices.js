export function minMaxPrices(array) {
  if (array) {
  const pricesClasses = array.map((el) => el.departure.price_info);
  const allPrices = [];
  pricesClasses.map((el) => {
    if (el.first) {
      if (el.first.top_price) {
          allPrices.push(el.first.top_price);
        } else if (el.first.bottom_price) {
          allPrices.push(el.first.bottom_price);
        } else if (el.first.side_price) {
          allPrices.push(el.first.side_price);
        };
      };
  
      if (el.second) {
        if (el.second.top_price) {
          allPrices.push(el.second.top_price);
        } else if (el.second.bottom_price) {
          allPrices.push(el.second.bottom_price);
        } else if (el.second.side_price) {
          allPrices.push(el.second.side_price);
        };
      };
  
      if (el.third) {
        if (el.third.top_price) {
          allPrices.push(el.third.top_price);
        } else if (el.third.bottom_price) {
          allPrices.push(el.third.bottom_price);
        } else if (el.third.side_price) {
          allPrices.push(el.third.side_price);
        };
      };
  
      if (el.fourth) {
        if (el.fourth.top_price) {
          allPrices.push(el.fourth.top_price);
        } else if (el.fourth.bottom_price) {
          allPrices.push(el.fourth.bottom_price);
        } else if (el.fourth.side_price) {
          allPrices.push(el.fourth.side_price);
        };
      };
    return el;
    });
  
    const minPrice = allPrices.sort((a, b) => a - b)[0];
    const maxPrice = allPrices.sort((a, b) => b - a)[0];
    return {
      minPrice,
      maxPrice,
      allPrices
    };
  };
  return {
    minPrice: 0,
    maxPrice: 7000,
    allPrices: []
  };
};

export function filterPrices(min, max, array) {
  return array.filter((e) => minMaxPrices([e]).allPrices.some((el) => min <= el && max >= el));
};
