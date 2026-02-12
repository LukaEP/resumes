import { describe, expect, test } from "@jest/globals";

import { Persona } from "../src/@types/Persona";
import { SimpleSection } from "../src/entities/SimpleSection";
import { SectionTitles } from "../src/enums/SectionTitles";
import { Profession } from "../src/@types/Profession";
import { ListSection } from "../src/entities/ListSection";
import { SelfDescription } from "../src/@types/SelfDescription";
import { Levels } from "../src/enums/Levels";
import { Education } from "../src/@types/Education";
import { Types } from "../src/enums/Types";
import { Skill } from "../src/@types/Skill";
import { Project } from "../src/@types/Project";
import { Resume } from "../src/entities/Resume";

describe("Resume test", () => {
    test("Create sections for a resume, and retrieve its json", () => {
        let jerry: Persona = {
            name: "Jerry",
            email: "Fischer",
            phone: "123456789",
            address: "X Avenue, 123",
            linkedin: "https://linkedin.com/in/jerry-fischer8494",
            photo: "jerry.png"
        };

        let personaSection = new SimpleSection<Persona>(SectionTitles.PERSONA, jerry);

        let selfDescription = "Hi, I'm Jerry. I do stuff. Anywhere I'm needed.";

        let selfDescriptionSection = new SimpleSection<SelfDescription>(SectionTitles.SELF_DESCRIPTION, selfDescription);

        let professions: Array<Profession> = [
            {
                companyName: "Luthor Corp",
                beggining: new Date("2025-06-12"),
                ending: undefined,
                description: "I made analysis of Superman flights trajectory, trying to find his GQ."
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
                ending: new Date("2008-01-19"),
                description: "I'm a sanitor, and I'm looking for a new job. My boss is kinda creepy... On night shifts, sometimes I see him wandering around on the labs with black clothes. Last week I asked him what he was doing, and now I have the feeling he's always wathing me."
            },
            {
                companyName: "The Daily Bugle",
                beggining: new Date("1997-01-10"),
                ending: new Date("2002-12-05"),
                description: "On my job, I took photos of Spider-man, or at least tried to. This new intern always shows up with new good photos of Spider-man. No one knows how he can get such good pics."
            }
        ];

        let professionsSection = new ListSection<Profession>(SectionTitles.PROFESSIONS, professions);

        let educations: Array<Education> = [
            {
                institution: "Xavier's School for Gifted Youngsters",
                level: Levels.TECHNICAL_COURSE,
                type: Types.VOCATIONAL,
                beggining: new Date("1995-07-12"),
                ending: new Date("1996-06-30"),
                skillsAcquired: [
                    {
                        value: "Super-speed",
                        type: "mutant"
                    },
                    {
                        value: "Super-strength",
                        type: "mutant"
                    }
                ],
                name: "Mutant Training"
            },
            {
                institution: "Gotham University",
                level: Levels.PHD,
                type: Types.DEGREE,
                beggining: new Date("2010-02-05"),
                ending: new Date("2015-06-15"),
                skillsAcquired: [
                    {
                        value: "Super-analysis",
                        type: "mutant"
                    }
                ],
                name: "PHD in super hero behaviour"
            }
        ];

        let educationSection = new ListSection<Education>(SectionTitles.EDUCATION, educations);

        let skills: Array<Skill> = [
            {
                value: "Python",
                type: "coding"
            },
            {
                value: "MongoDB",
                type: "database"
            }
        ];

        let skillsSection = new ListSection<Skill>(SectionTitles.SKILLS, skills);

        let projects: Array<Project> = [
            {
                title: "How super heroes interact with society?",
                description: "Super heroes are idolized by many. They save people, stop robberies, bring peace to chaotic cities, etc. And for so long people have tried to discover their secret identity. Even though some succeeded, for me a simple name and apperance does not matter that much, but their personality and morals can be shown in simple acts. This study tries to identify patterns in super heroes behaviour, in order to know who they really are, even with their masks on.",
                reference: "https://ghotam-university.com/jerry-fischer/how-super-heroes-interact-with-society"
            }
        ];

        let projectsSection = new ListSection<Project>(SectionTitles.PROJECTS, projects);

        let resume = new Resume([ personaSection, selfDescriptionSection, professionsSection, educationSection, skillsSection, projectsSection ]);

        let valueExpected = [
            {
                title: "Persona",
                content: {
                    name: "Jerry",
                    email: "Fischer",
                    phone: "123456789",
                    address: "X Avenue, 123",
                    linkedin: "https://linkedin.com/in/jerry-fischer8494",
                    photo: "jerry.png"
                }
            },
            {
                title: "Description",
                content: "Hi, I'm Jerry. I do stuff. Anywhere I'm needed."
            },
            {
                title: "Professional Experiences",
                items: [
                    {
                        companyName: "Luthor Corp",
                        beggining: new Date("2025-06-12"),
                        ending: undefined,
                        description: "I made analysis of Superman flights trajectory, trying to find his GQ."
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
                        ending: new Date("2008-01-19"),
                        description: "I'm a sanitor, and I'm looking for a new job. My boss is kinda creepy... On night shifts, sometimes I see him wandering around on the labs with black clothes. Last week I asked him what he was doing, and now I have the feeling he's always wathing me."
                    },
                    {
                        companyName: "The Daily Bugle",
                        beggining: new Date("1997-01-10"),
                        ending: new Date("2002-12-05"),
                        description: "On my job, I took photos of Spider-man, or at least tried to. This new intern always shows up with new good photos of Spider-man. No one knows how he can get such good pics."
                    }
                ]
            },
            {
                title: "Education",
                items: [
                    {
                        institution: "Xavier's School for Gifted Youngsters",
                        level: Levels.TECHNICAL_COURSE,
                        type: Types.VOCATIONAL,
                        beggining: new Date("1995-07-12"),
                        ending: new Date("1996-06-30"),
                        skillsAcquired: [
                            {
                                value: "Super-speed",
                                type: "mutant"
                            },
                            {
                                value: "Super-strength",
                                type: "mutant"
                            }
                        ],
                        name: "Mutant Training"
                    },
                    {
                        institution: "Gotham University",
                        level: Levels.PHD,
                        type: Types.DEGREE,
                        beggining: new Date("2010-02-05"),
                        ending: new Date("2015-06-15"),
                        skillsAcquired: [
                            {
                                value: "Super-analysis",
                                type: "mutant"
                            }
                        ],
                        name: "PHD in super hero behaviour"
                    }
                ]
            },
            {
                title: "Skills",
                items: [
                    {
                        value: "Python",
                        type: "coding"
                    },
                    {
                        value: "MongoDB",
                        type: "database"
                    }
                ]
            },
            {
                title: "Projects",
                items: [
                    {
                        title: "How super heroes interact with society?",
                        description: "Super heroes are idolized by many. They save people, stop robberies, bring peace to chaotic cities, etc. And for so long people have tried to discover their secret identity. Even though some succeeded, for me a simple name and apperance does not matter that much, but their personality and morals can be shown in simple acts. This study tries to identify patterns in super heroes behaviour, in order to know who they really are, even with their masks on.",
                        reference: "https://ghotam-university.com/jerry-fischer/how-super-heroes-interact-with-society"
                    }
                ]
            }
        ];

        let valueReceived = resume.toJSON();

        expect(valueReceived).toStrictEqual(valueExpected);
    });
});