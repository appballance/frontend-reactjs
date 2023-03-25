import { screen } from "@testing-library/react";

import { renderCustom } from "infrastructure/utils";

import { Input } from ".";

describe("Component Input", () => {
  test("Should can render", () => {
    const propsMock = {
      text: "Text of button",
      label: "Label",
      value: "123",
      onClick: jest.fn(),
    };

    renderCustom(
      <Input
        label={propsMock.label}
        onClick={propsMock.onClick}
        value={propsMock.value}
      >
        {propsMock.text}
      </Input>
    );

    expect(screen.getByText(propsMock.label)).toBeInTheDocument();
  });
});
