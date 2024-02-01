import { render, screen, waitFor } from "@testing-library/react";
import Home from "../../../src/pages/Home/Home";

describe("HomePage", () => {
  it("Should have Welcome Text", async () => {
    // ACT
    await waitFor(() => {
      render(<Home />);
    });

    // ASSERT
    const textWelcome = screen.getByText(/Welcome Home/i);
    expect(textWelcome).toBeInTheDocument();
  });
});
