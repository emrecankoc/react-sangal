import { classnames } from "./utility";

describe("classname generator utility", () => {
  it("it should return concated string", () => {
    const resp = classnames("testing", "your", "code", "is", "good");
    expect(resp).toBe("testing your code is good");
  });
});
