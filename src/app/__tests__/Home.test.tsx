import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the Next.js and Vercel logos", () => {
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
    expect(screen.getByAltText("Vercel logomark")).toBeInTheDocument();
  });

  it("contains welcome message and instructions", () => {
    expect(screen.getByText(/Hello Gunjan Kumar/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Save and see your changes instantly/i)
    ).toBeInTheDocument();
  });

  it("contains useful external links", () => {
    expect(screen.getByText(/Deploy now/i)).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new")
    );
    expect(screen.getByText(/Read our docs/i)).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
    expect(screen.getByText(/Go to nextjs.org/i)).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org")
    );
  });
});
