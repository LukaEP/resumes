import { describe, expect, test } from "@jest/globals";

import { Section } from "../src/entities/Section";
import { SectionTypeEnum } from "../src/entities/SectionTypeEnum";

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