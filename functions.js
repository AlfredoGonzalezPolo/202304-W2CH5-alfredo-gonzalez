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
  const lastCoderInArray = coderArray[coderArray.length - 1];
  if (coderArray.length === 0) {
    return undefined;
  }

  if (coderArray.length > 0) {
    return lastCoderInArray;
  }
};
