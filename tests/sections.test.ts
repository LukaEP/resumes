import { describe, expect, test } from "@jest/globals";

import { SectionTypeEnum } from "../src/entities/SectionTypeEnum";

import { Section } from "../src/entities/Section";
import { PersonaSection } from "../src/entities/sections/Persona";

describe("Generic sections test", () => {
    test("Create generic section", () => {
        let valueExpected = Section;
        let valueReceived = new Section(SectionTypeEnum.PERSONA);

        expect(valueReceived).toBeInstanceOf(valueExpected);
    });

    test("Get section type", () => {
        let section = new Section(SectionTypeEnum.PERSONA);

        let valueExpected = SectionTypeEnum.PERSONA;
        let valueReceived = section.getType();

        expect(valueReceived).toBe(valueExpected);
    });

    test("Set a different type", () => {
        let section = new Section(SectionTypeEnum.EDUCATION);
        section.setType(SectionTypeEnum.SKILLS);

        let valueExpected = SectionTypeEnum.SKILLS;
        let valueReceived = section.getType();

        expect(valueReceived).toBe(valueExpected);
    });
});

describe("Persona sections test", () => {
    test("Test if persona section is an instace of a generic section", () => {
        let valueExpected = Section;
        let valueReceived = new PersonaSection(SectionTypeEnum.PERSONA,
            "Bob Tiger",
            "tiger.bob123@gmail.com",
            "51912345678",
            "Street X",
            "https://linkedin.com/in/bob-tiger-123412312/",
            "photos/persona/bob_tiger1.png");

        expect(valueReceived).toBeInstanceOf(valueExpected);
    });
});