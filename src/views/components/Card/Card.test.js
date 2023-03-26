import { screen } from "@testing-library/react";
import { renderCustom } from "infrastructure/utils";
import { Card } from ".";

describe("Card component", () => {
  test("Should can render", () => {
    const propsMock = {
      children: "Children mocked",
    };

    renderCustom(<Card>{propsMock.children}</Card>);

    expect(screen.getByText(propsMock.children)).toBeInTheDocument();
  });
});
