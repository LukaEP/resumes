import { describe, expect, test } from "@jest/globals";

describe("Basic test", () => {
    test("Simple test", () => {
        let valueExpected = 4;
        let valueReceived = 2 + 2;

        expect(valueReceived).toBe(valueExpected);
    });
});