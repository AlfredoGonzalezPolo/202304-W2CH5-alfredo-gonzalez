import {
  lengthFunction,
  pushFunction,
  someFunction,
  popFunction,
  shiftFunction,
  unshiftFunction,
} from "./functions.js";

describe("Given a lenghtFunction function", () => {
  describe("When it receives [2, 4]", () => {
    test("Then it should return 2", () => {
      const valueA = [2, 4];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(2);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return 0", () => {
      const valueA = [];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(0);
    });
  });

  describe("When it receives [2, true, 'Cecina', NaN]", () => {
    test("Then it should return 4", () => {
      const valueA = [2, true, "Cecina", NaN];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(4);
    });
  });
});

describe("Given a pushFunction function", () => {
  describe("When it receives [2 ,4] and 'isdi'", () => {
    test("Then it should return 3", () => {
      const valueA = [2, 4];
      const valueB = "isdi";

      const checkPush = pushFunction(valueA, valueB);

      expect(checkPush).toBe(3);
    });
  });

  describe("When it receives [2, 3, 4] and [6, 31]", () => {
    test("Then it should return 4", () => {
      const valueA = [2, 3, 4];
      const valueB = [6, 31];

      const checkPush = pushFunction(valueA, valueB);

      expect(checkPush).toBe(4);
    });
  });

  describe("When it receives [2, 3, 4] and ''", () => {
    test("Then it should return 4", () => {
      const valueA = [2, 3, 4];
      const valueB = "";

      const checkPush = pushFunction(valueA, valueB);

      expect(checkPush).toBe(4);
    });
  });
});

describe("Given a someFunction function", () => {
  describe("When it receives `Marta`", () => {
    test("Then it should return true", () => {
      const coders = ["Marta", "Luis", "Pere"];
      const parameter = "Marta";

      const expectedResult = true;
      const expectedValue = someFunction(coders, parameter);

      expect(expectedValue).toBe(expectedResult);
    });
  });

  describe("When it receives `Taco`", () => {
    test("Then it should return false", () => {
      const coders = ["Marta", "Luis", "Pere"];
      const parameter = "Taco";

      const expectedResult = false;
      const expectedValue = someFunction(coders, parameter);

      expect(expectedValue).toBe(expectedResult);
    });
  });

  describe("When it receives `23`", () => {
    test("Then it should return false", () => {
      const coders = ["Marta", "Luis", "Pere", 23];
      const parameter = "23";

      const expectedResult = false;
      const expectedValue = someFunction(coders, parameter);

      expect(expectedValue).toBe(expectedResult);
    });
  });
});

describe("Given a popFunction function", () => {
  describe("When it receives ['David', 'Bisbal', 'Máquina']", () => {
    test("Then it should return 'Máquina'", () => {
      const initalList = ["David", "Bisbal", "Máquina"];

      const expectedOutput = "Máquina";
      const checkPopFunction = popFunction(initalList);

      expect(checkPopFunction).toBe(expectedOutput);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return undefinied", () => {
      const initialList = [];

      const expectedOutput = undefined;
      const checkPopFunction = popFunction(initialList);

      expect(checkPopFunction).toBe(expectedOutput);
    });
  });
});

describe("Given a shiftFunction function", () => {
  describe("When it receives [1, 5, 7, 9]", () => {
    test("Then it should return 1", () => {
      const initialList = [1, 5, 7, 9];

      const expectedOutput = 1;
      const checkShiftFunction = shiftFunction(initialList);

      expect(checkShiftFunction).toBe(expectedOutput);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return undefined", () => {
      const initialList = [];

      const expectedOutput = undefined;
      const checkShiftFunction = shiftFunction(initialList);

      expect(checkShiftFunction).toBe(expectedOutput);
    });
  });
});

describe("Given a unshiftFunction function", () => {
  describe("When it receives [1, 44, 0] and ['tengo', 'hambre']", () => {
    test("Then it should return 5", () => {
      const firstList = [1, 44, 0];
      const secondList = ["tengo", "hambre"];

      const expectedOutput = 5;
      const checkUnshiftFunction = unshiftFunction(firstList, ...secondList);

      expect(checkUnshiftFunction).toBe(expectedOutput);
    });
  });

  describe("When it receives ['voy', 'a', 'comer'] and []", () => {
    test("Then it should return 3", () => {
      const firstList = ["voy", "a", "comer"];
      const secondList = [];

      const expectedOutput = 3;
      const checkUnshiftFunction = unshiftFunction(firstList, ...secondList);

      expect(checkUnshiftFunction).toBe(expectedOutput);
    });
  });
});
