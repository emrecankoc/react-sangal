import * as React from "react";
import { mount } from "enzyme";
import SangalInput from "./SangalInput";

describe("SangalInput Component tests", () => {
  it("should not break when input type is text", () => {
    const component = mount(
      <SangalInput type="text" value="Text Input" onChange={jest.fn()} />
    );
    expect(component).toBeTruthy();
  });
  it("should call onchange method when input updated", () => {
    const event = jest.fn();

    const component = mount(
      <SangalInput type="text" value="Text Input" onChange={event} />
    );
    const input = component.find("input");
    expect(input.length).toBe(1);

    input.simulate("change", { whitch: "a" });
    expect(event).toBeCalled();
  });
});
