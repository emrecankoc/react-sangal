import * as React from "react";
import SangalPager from "./SangalPager";
import { mount } from "enzyme";

describe("SangalPager Component test", () => {
  it("page 5 should be active", () => {
    const component = mount(
      <SangalPager
        currentPage={5}
        lastPage={10}
        onPageChangeEvent={() => null}
      />
    );

    const active = component.find(".active").hostNodes();
    expect(active.text()).toBe("5");
  });

  it("when page 3 clicked active should updated", () => {
    const eventMock = jest.fn();

    const component = mount(
      <SangalPager
        currentPage={5}
        lastPage={10}
        onPageChangeEvent={eventMock}
      />
    );
    const element3 = component.find(`[data-testid="3"]`);
    expect(element3.length).toBe(1);

    element3.simulate("click");
    expect(eventMock.mock.calls.length).toBe(1);
  });

  it("should warn when current page more than lastpage", () => {
    const component = mount(
      <SangalPager currentPage={5} lastPage={4} onPageChangeEvent={jest.fn()} />
    );
    expect(component.text()).toBe("Error occured when displaying pagination!");
  });

  it("should show volume based pagination", () => {
    const eventMock = jest.fn();

    const component = mount(
      <SangalPager
        currentPage={5}
        lastPage={10}
        onPageChangeEvent={eventMock}
        paginationVolume={7}
      />
    );

    expect(component).toBeTruthy();
    expect(component.find(`[data-testid="8"]`).length).toBe(1);
    expect(component.find(`[data-testid="2"]`).length).toBe(1);
  });
});
