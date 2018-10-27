function make(...item) {
  const valueStore = [];

  function makeInner(...items) {
    for (let i = 0; i < items.length; i++) {
      if (typeof items[i] !== 'function') {
        valueStore.push(items[i]);
      } else {
        return valueStore.reduce(items[i], 0);
      }
    }
    return makeInner;
  }

  return makeInner(...item);
}
