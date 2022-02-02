const _ = {
  inRange(num, start, end) {
    if (end === undefined) {
      start = 0;
    }
    if (start > end) {
      tempEnd = end;
      start = end;
      end = tempEnd;
      console.log(start);
      console.log(end);
      console.log(num);
    }
  },
};

inRange(1, 2, 3);
