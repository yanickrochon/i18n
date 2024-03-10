import { format } from "./format";

describe("Testing formatter", () => {
  it("should format", () => {
    expect(format("Hello world")).toBe("Hello world");

    expect(format("Hello {name}", { name: "John" })).toBe("Hello John");

    // @ts-expect-error - Will require a second parameter
    expect(format("Current year: {year}")).toBe("Current year: ?year");

    // @ts-expect-error - Will require a second parameter
    expect(format("Hello {name}", { foo: 1 })).toBe("Hello ?name");

    // @ts-expect-error - Allow empty placeholder, but require second parameter
    expect(format("Hello {}")).toBe("Hello ?");

    // @ts-expect-error - Require property with empty-string key
    expect(format("Hello {}", {})).toBe("Hello ?");

    // Allow property with empty-string key
    expect(format("Hello {}", { "": 1 })).toBe("Hello 1");
  });
});
