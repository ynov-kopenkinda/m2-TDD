import { addStrings } from "./calculator";

describe("1. addStrings", () => {
  it("1.0 should return 0 for an empty string", () => {
    expect(addStrings("")).toBe(0);
  });
});
