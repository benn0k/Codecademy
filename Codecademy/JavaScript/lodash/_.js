const _ = {
  clamp(num, lower, upper) {
    lowerClamp = Math.max(lower, num);
    clampedValue = Math.min(lowerClamp, upper);
    return clampedValue;
  },
};

// Do not write or modify code below this line.
module.exports = _;
