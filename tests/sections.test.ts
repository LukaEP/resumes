import { describe, expect, test } from "@jest/globals";

import { SimpleSection } from "../src/entities/SimpleSection";
import { ListSection } from "../src/entities/ListSection";

import { Persona } from "../src/@types/Persona";
import { SelfDescription } from "../src/@types/SelfDescription";
import { Profession } from "../src/@types/Profession";
import { Education } from "../src/@types/Education";
import { Levels } from "../src/enums/Levels";
import { Types } from "../src/enums/Types";
import { Skill } from "../src/@types/Skill";
import { Project } from "../src/@types/Project";
import { SectionTitles } from "../src/enums/SectionTitles";

describe("Generic simple sections test", () => {
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

        let section = new SimpleSection<Persona>(SectionTitles.PERSONA, jerry);
        let valueReceived = section.getValue().name;

        expect(valueReceived).toBe(valueExpected);
    });

    test("Create self description section, and check if it is correct", () => {
        let selfDescription = "My name is Barry Allen, and I'm the fastest man alive!";
        let valueExpected = selfDescription;

        let section = new SimpleSection<SelfDescription>(SectionTitles.SELF_DESCRIPTION, selfDescription);
        let valueReceived = section.getValue();

        expect(valueReceived).toBe(valueExpected);
    });
});

describe("Generic list sections test", () => {
    test("Create professions section, and check if one of the professions is correct", () => {
        let professions: Array<Profession> = [
            {
                companyName: "Luthor Corp",
                beggining: new Date("2025-06-12"),
                ending: undefined,
                description: "I make analysis of Superman flights trajectory, to try to find his GQ."
            },
            {
                companyName: "S.H.I.E.L.D.",
                beggining: new Date("2013-08-10"),
                ending: new Date("2021-02-15"),
                description: "My job was basically to make new eye patches for Nick Fury. Unfortunely, he flew away with some green shape-shifting aliens to another planet, and no one else needed eye patches anymore..."
            },
            {
                companyName: "Wayne Enterprises",
                beggining: new Date("2005-06-10"),
                ending: undefined,
                description: "I'm a sanitor, and I'm looking for a new job. My boss is kinda creepy... On night shifts, sometimes I see him wandering around on the labs with black clothes. Last week I asked him what he was doing, and now I have the feeling he's always wathing me."
            },
            {
                companyName: "The Daily Bugle",
                beggining: new Date("1997-01-10"),
                ending: new Date("2002-12-05"),
                description: "On my job, I took photos of Spider-man, or at least tried to. This new intern always shows up with new good photos of Spider-man. No one knows how he can get such good pics."
            }
        ];
        let valueExpected = professions[1];

        let section = new ListSection<Profession>(SectionTitles.PROFESSIONS, professions);
        let valueReceived = section.getValue()[1];

        expect(valueReceived).toBe(valueExpected);
    });

    test("Create education section, and check its length", () => {
        let oldEducations: Array<Education> = [
            {
                institution: "Orebro Universitet",
                level: Levels.BACHELOR,
                type: Types.DEGREE,
                beggining: new Date("2023-07-15"),
                ending: new Date("2027-05-10"),
                skillsAcquired: [
                    {
                        value: "python",
                        type: "coding"
                    }
                ],
                name: "Computer Science"
            }
        ];
        let newEducations: Array<Education> = [
            {
                institution: "Uppsala Universitet",
                level: Levels.BACHELOR,
                type: Types.DEGREE,
                beggining: new Date("2028-07-12"),
                ending: new Date("2031-03-30"),
                skillsAcquired: [
                    {
                        value: "C#",
                        type: "coding"
                    }
                ],
                name: "Game Design"
            },
            {
                institution: "Orebro Universitet",
                level: Levels.MASTERS,
                type: Types.DEGREE,
                beggining: new Date("2031-08-05"),
                ending: new Date("2033-05-15"),
                skillsAcquired: [
                    {
                        value: "python",
                        type: "coding"
                    },
                    {
                        value: "C",
                        type: "coding"
                    }
                ],
                name: "Information Systems"
            }
        ];

        let valueExpected = 2;

        let section = new ListSection<Education>(SectionTitles.EDUCATION, oldEducations);
        section.setList(newEducations);

        let valueReceived = section.getValue().length;

        expect(valueReceived).toBe(valueExpected);
    });

    test("Create skills section, and add new skills", () => {
        let skills: Array<Skill> = [
            {
                value: "Rust",
                type: "coding"
            },
            {
                value: "Assembly",
                type: "coding"
            },
            {
                value: "MongoDB",
                type: "database"
            }
        ];

        let valueExpected = 5;

        let section = new ListSection<Skill>(SectionTitles.SKILLS, skills);
        section.addItem({
            value: "Docker",
            type: "coding-tool"
        });
        section.addItem({
            value: "GIT",
            type: "coding-tool"
        });

        let valueReceived = section.getValue().length;

        expect(valueReceived).toBe(valueExpected);
    });

    test("Create projects section, remove one item, and check if the projects are correct", () => {
        let projects: Array<Project> = [
            {
                title: "Polyhedra Flattening",
                description: "Desktop app that generates and flattens a polyhedra.",
                reference: "https://github.com/LukaEP/planificacao_poliedros"
            },
            {
                title: "Basic chat",
                description: "Basic web browser chat.",
                reference: "https://github.com/LukaEP/basic-chat"
            },
            {
                title: "Email Sender API",
                description: "Learning project, email sender API",
                reference: "https://github.com/LukaEP/emailSender"
            }
        ];

        let valueExpected: Array<Project> = [
            {
                title: "Polyhedra Flattening",
                description: "Desktop app that generates and flattens a polyhedra.",
                reference: "https://github.com/LukaEP/planificacao_poliedros"
            },
            {
                title: "Basic chat",
                description: "Basic web browser chat.",
                reference: "https://github.com/LukaEP/basic-chat"
            }
        ];

        let section = new ListSection<Project>(SectionTitles.PROJECTS, projects);
        section.removeItem(2);

        let valueReceived = section.getValue();

        expect(valueReceived).toEqual(valueExpected);
    });
});