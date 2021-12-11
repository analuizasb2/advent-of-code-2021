import { Dive } from "./Dive";

describe("Dive", () => {
  const testArray = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];

  test("Should return actual position when test movements", () => {
    const position = Dive.calculatePositionSimple(testArray);

    expect(position.horizontal).toBe(15);
    expect(position.depth).toBe(10);
  });
  test("Should return actual position when test movements", () => {
    const position = Dive.calculatePositionWithAim(testArray);

    expect(position.horizontal).toBe(15);
    expect(position.depth).toBe(60);
  });
});
