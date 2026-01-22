import { describe, expect, test } from "@jest/globals";

import { Section } from "../src/entities/Section";

import { Persona } from "../src/@types/Persona";
import { SelfDescription } from "../src/@types/SelfDescription";

describe("Generic sections test", () => {
    test("Create persona section, and check if name is correct", () => {
        let jerry: Persona = {
            name: "Jerry",
            email: "Fischer",
            phone: "123456789",
            address: "X Avenue, 123",
            linkedin: "https://linkedin.com/in/jerry-fischer8494",
            photo: "jerry.png"
        };
        let valueExpected = jerry.name;

        let section = new Section<Persona>(jerry);
        let valueReceived = section.getValue().name;

        expect(valueReceived).toBe(valueExpected);
    });

    test("Create self description section, and check if it is correct", () => {
        let selfDescription = "My name is Barry Allen, and I'm the fastest man alive!";
        let valueExpected = selfDescription;

        let section = new Section<SelfDescription>(selfDescription);
        let valueReceived = section.getValue();

        expect(valueReceived).toBe(valueExpected);
    });
});