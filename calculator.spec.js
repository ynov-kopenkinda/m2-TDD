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

describe("4. addStrings", () => {
  it("Add validation to not to allow a separator at the end", () => {
    expect(() => addStrings(",")).toThrow();
    expect(() => addStrings("1,")).toThrow();
    expect(() => addStrings("\n")).toThrow();
    expect(() => addStrings("1\n")).toThrow();
    expect(() => addStrings("1,2,3,")).toThrow();
    expect(() => addStrings("1,2,3\n")).toThrow();
  });
});

describe("5. addStrings", () => {
  it("5.0 Allow the add method to handle a different delimiter <format: //[delimiter]\n[numbers]>", () => {
    expect(addStrings("//;\n1;2")).toBe(3);
    expect(addStrings("//;\n1;2;3")).toBe(6);
    expect(addStrings("//;\n1;2;3;4")).toBe(10);
    expect(addStrings("//;\n1;2;3;4;5")).toBe(15);
  });
  it("5.1 Allow the add method to handle a different delimiter <format: //[delimiter]\n[numbers]>", () => {
    expect(addStrings("//|\n1|2")).toBe(3);
    expect(addStrings("//test\n1test2,3")).toBe(6);
  });
});
