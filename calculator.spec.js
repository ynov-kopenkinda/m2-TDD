import { addStrings } from "./calculator";

describe("1. addStrings", () => {
  it("1.0 should return 0 for an empty string", () => {
    expect(addStrings("")).toBe(0);
  });
  it("1.1 should return 1 for an '1'", () => {
    expect(addStrings("1")).toBe(1);
  });
});
