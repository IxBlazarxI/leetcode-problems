var findClosest = function(x, y, z) {
  let data1 = Math.abs(x - z);
  let data2 = Math.abs(y - z);

  if (data1 < data2) {
    return 1;
  } else if (data2 < data1) {
    return 2;
  } else {
    return 0;
  }
}
