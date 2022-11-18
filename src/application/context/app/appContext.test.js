import React from "react";
import { mount } from "enzyme";
import { AppProvider } from "./appContext";
import { useApp } from "./hooks";

function TestComponent(componentProps) {
  const { goTo, setPath, path } = useApp();

  return (
    <>
      <button onClick={goTo}> Go To (url, type) ...</button>
      <button onClick={() => setPath(componentProps.path)}> SetPath...</button>
      <p>{path}</p>
    </>
  );
}

const MountComponent = (props) => {
  const componentProps = {
    ...props,
  };

  const wrapper = mount(
    <AppProvider>
      <TestComponent {...componentProps} />
    </AppProvider>
  );

  const unmount = () => wrapper.unmount();

  return [wrapper, unmount];
};

describe("App Context", () => {
  it("should call window.open when goTo is called", () => {
    const mockWindow = jest.fn();
    window.open = mockWindow;
    const [wrapper, unmount] = MountComponent({});
    wrapper.find("button").at(0).simulate("click");
    expect(mockWindow).toBeCalled();
    unmount();
  });

  it("should set path to locacoes when path is locacoes", () => {
    const [wrapper, unmount] = MountComponent({
      path: "/locacoes/novalocacao",
    });
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.find("p").text()).toBe("locacoes");
    unmount();
  });

  it("shouldn`t set path when path is empty", () => {
    const [wrapper, unmount] = MountComponent({ path: "" });
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.find("p").text()).toEqual("");
    unmount();
  });
});
