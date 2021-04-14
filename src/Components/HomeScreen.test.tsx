import { render, fireEvent, screen, act } from "@testing-library/react";
import Home from "./HomeScreen";
describe("Checking the task created is red or blue", () => {
  test("onButton click open the popup", () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: /create/i }));
    expect(screen.getByText(/Time Left/i)).toBeInTheDocument();
  });

  test("create Task before the timer expires", () => {
    render(<Home />);
    fireEvent.click(screen.getByRole("button", { name: /create/i }));
    fireEvent.change(screen.getByPlaceholderText(/Enter the Task/i), {
      target: { value: "task1" },
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: /Add Task/i }));
    });
    expect(screen.getByText(/task1/i)).toBeInTheDocument();
  });
});
