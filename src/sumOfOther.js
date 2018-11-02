function sumOfOther(arr) {
  return arr.map((item, i) => arr.reduce((sum, current, index) => {
    const result = index !== i ? sum + current : sum;
    return result;
  }, 0));
}