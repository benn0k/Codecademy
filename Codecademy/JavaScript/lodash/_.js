const _ = {
  // return a number between two clamped values
  clamp(num, lower, upper) {
    //set lowerClamp to whatever is larger, the passed lower number, or the passed 'num'
    lowerClamp = Math.max(lower, num);
    //set clampedValue to whatever is smaller, lowerClamp or upper
    clampedValue = Math.min(lowerClamp, upper);
    //return it
    return clampedValue;
  },

  //return bool - true if num falls between start and end
  inRange(num, start, end) {
    // if end is not declared, set end to start and start to 0
    if (end === undefined) {
      end = start;
      start = 0;
    }
    // if start is greater than end, swap end and start. use a temp variable to house end, set end to start, set start to end
    if (start > end) {
      tempEnd = end;
      end = start;
      start = tempEnd;
    }
    //if passed num is equal to end, set return to false.
    if (num === end) {
      isInRange = false;
      return isInRange;
    }
    // set returnVar to the boolean of: if start is less than or equal to number and number is less than or equal to end
    isInRange = Boolean(start <= num && num <= end);
    return isInRange;
  },
};

// Do not write or modify code below this line.
module.exports = _;
? O I ? T