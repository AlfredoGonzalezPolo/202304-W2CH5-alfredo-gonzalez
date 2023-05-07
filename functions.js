export const lengthFunction = (coder) => {
  let i = 0;

  for (i in coder) {
    i++;
  }

  return i;
};

export const pushFunction = (coderArray, ...newPush) => {
  const actualArray = [...coderArray];
  const all = [...actualArray, ...newPush];

  return lengthFunction(all);
};

export const someFunction = (coderArray, parameter) => {
  const length = lengthFunction(coderArray);

  for (let i = 0; i < length; i++) {
    if (coderArray[i] === parameter) {
      return true;
    }
  }

  return false;
};

export const popFunction = (coderArray) => {
  const lastItemInArray = coderArray[coderArray.length - 1];
  if (coderArray.length === 0) {
    return undefined;
  }

  if (coderArray.length > 0) {
    return lastItemInArray;
  }
};

export const shiftFunction = (coderArray) => {
  if (coderArray.length === 0) {
    return undefined;
  }

  if (coderArray.length > 0) {
    const firstItemInArray = coderArray[0];
    for (let i = 0; i < coderArray.length; i++) {
      coderArray[i - 1] = coderArray[i];
    }

    popFunction(coderArray);
    return firstItemInArray;
  }
};

export const unshiftFunction = (coderArray, ...newItem) => {
  const finalTotalArray = [...newItem, ...coderArray];
  return finalTotalArray.length;
};
