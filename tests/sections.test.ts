import { describe, expect, test } from "@jest/globals";

import { SectionTypeEnum } from "../src/enums/SectionTypeEnum";

import { Section } from "../src/entities/Section";
import { PersonaSection } from "../src/entities/sections/Persona";
import { ProfessionalExperiencesSection } from "../src/entities/sections/ProfessionalExperiences";
import { EducationsSection } from "../src/entities/sections/Educations";
import { SkillsSection } from "../src/entities/sections/Skills";
import { Types } from "../src/enums/Types";
import { Levels } from "../src/enums/Levels";

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

describe("Professional experiences test", () => {
    test("Test if professional experiences section is an instance of a generic section", () => {
        let valueExpected = Section;
        let valueReceived = new ProfessionalExperiencesSection(SectionTypeEnum.PROFISSIONAL_EXPERIENCES, [
            {
                companyName: "Example 1",
                beggining: new Date("2024-11-12"),
                ending: new Date("2025-06-15"),
                description: "Testing 1"
            },
            {
                companyName: "Example 2",
                beggining: new Date("2025-08-05"),
                ending: undefined,
                description: "Testing 2"
            }
        ]);

        expect(valueReceived).toBeInstanceOf(valueExpected);
    });
});

describe("Educations test", () => {
    test("Test if education section is an instance of a generic section", () => {
        let valueExpected = Section;
        let valueReceived = new EducationsSection(SectionTypeEnum.EDUCATION, [
            {
                institution: "University X",
                type: Types.ACADEMIC,
                level: Levels.BACHELOR,
                beggining: new Date("2020-02-10"),
                ending: new Date("2023-12-10"),
                skillsAcquired: [
                    {
                        value: "C",
                        type: "technology"
                    },
                    {
                        value: "Java",
                        type: "technology"
                    }
                ],
                name: "Computer Science"
            }
        ]);

        expect(valueReceived).toBeInstanceOf(valueExpected);
    });
});

describe("Skills test", () => {
    test("Test if skill section is an instance of a generic section", () => {
        let valueExpected = Section;
        let valueReceived = new SkillsSection(SectionTypeEnum.SKILLS, [
            {
                value: "PHP",
                type: "technology"
            },
            {
                value: "Laravel",
                type: "technology"
            }
        ]);

        expect(valueReceived).toBeInstanceOf(valueExpected);
    });
});