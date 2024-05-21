import { describe, beforeAll, it, expect } from "vitest";
import { camxes } from "./index";

describe("parser", () => {
  let sut: any;

  beforeAll(() => {
    sut = camxes;
  });

  it("is defined", () => {
    expect(sut).toBeDefined();
    expect(sut.parse).toBeDefined();
  });

  // TODO: Implement reverse templating
  it("parses basic jafra", async () => {
    expect(sut.parse("coi")).toMatchSnapshot();

    expect(sut.parse("mi nelci")).toMatchSnapshot();
  });
});
