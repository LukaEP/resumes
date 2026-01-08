import { describe, expect, test } from "@jest/globals";

import { Section } from "../src/entities/Section";
import { SectionTypeEnum } from "../src/entities/SectionTypeEnum";

describe("Generic sections test", () => {
    test("Create generic section", () => {
        let valueReceived = new Section(SectionTypeEnum.PERSONA);
        let valueExpected = Section;

        expect(valueReceived).toBeInstanceOf(valueExpected);
    });
});