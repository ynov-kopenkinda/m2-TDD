import { addStrings } from "./calculator";

describe("1. addStrings", () => {
  it("1.0 should return 0 for an empty string", () => {
    expect(addStrings("")).toBe(0);
  });
  it("1.1 should return 1 for an '1'", () => {
    expect(addStrings("1")).toBe(1);
  });
  it("1.1 should return 3 for an '1,2'", () => {
    expect(addStrings("1,2")).toBe(3);
  });
});

describe("2. addStrings", () => {
  it("2.0 should handle any number of arguments", () => {
    expect(addStrings("1,2,3")).toBe(6);
    expect(addStrings("1,3")).toBe(4);
    expect(addStrings("1,4")).toBe(5);
    expect(addStrings("4")).toBe(4);
    expect(addStrings("0")).toBe(0);
    expect(addStrings("")).toBe(0);
  });
});

describe("3. addStrings", () => {
  it("3.0 Allow the add method to handle newlines as separators, instead of comas", () => {
    expect(addStrings("1\n2,3")).toBe(6);
    expect(addStrings("1\n2\n3")).toBe(6);
    expect(addStrings("1,2,3")).toBe(6);
  });
});
