import { screen, render } from "@testing-library/react";
import { Header } from ".";

describe("Testin Header Component", () => {
  it("must display a title Memory", () => {
    render(<Header />);
    expect(screen.queryByText(/Memory/i)).toBeInTheDocument();
  });
});
