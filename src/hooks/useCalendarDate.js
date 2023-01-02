function getCalendarFrom() {
  if (hidden.from === 'none' && fromDate === '') {
    setHidden({...hidden, from: 'calendar-from', to: 'none'});
  } else {
    setHidden({...hidden, from: 'none'});
  };
};

function getCalendarTo() {
  if (hidden.to === 'none' && toDate === '') {
    setHidden({...hidden, to: 'calendar-to', from: 'none'});
  } else {
    setHidden({...hidden, to: 'none'});
  };
};

function getDate(choiceDate: string) {
  if (hidden.from === 'calendar-from') {
    dispatch(choiceDateFrom(choiceDate));
    setHidden({...hidden, from: 'none'});
  };

  if (hidden.to === 'calendar-to') {
    dispatch(choiceDateTo(choiceDate));
    setHidden({...hidden, to: 'none'});
  };
};



function getCalendarFrom() {
  if (hidden.from === 'none') {
    setHidden({...hidden, from: 'filter-calendar-from', to: 'none'});
  } else {
    setHidden({...hidden, from: 'none'});
  };
};

function getCalendarTo() {
  if (hidden.to === 'none') {
    setHidden({...hidden, to: 'filter-calendar-to', from: 'none'});
  } else {
    setHidden({...hidden, to: 'none'});
  };
};

function getDate(choiceDate) {
  if (hidden.from === 'filter-calendar-from') {
    dispatch(choiceDateFrom(choiceDate));
    setHidden({...hidden, from: 'none'});
  };

  if (hidden.to === 'filter-calendar-to') {
    dispatch(choiceDateTo(choiceDate));
    setHidden({...hidden, to: 'none'});
  };
};