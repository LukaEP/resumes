import { Section } from "../Section";
import { SectionTypeEnum } from "../../enums/SectionTypeEnum";
import { Skill } from "../../@types/Skill";

class SkillsSection extends Section {
    private skills: Array<Skill>;

    public constructor(type: SectionTypeEnum, skills: Array<Skill>) {
        super(type);

        this.skills = skills;
    }

    public getSkills(): Array<Skill> {
        return this.skills;
    }

    public setSkills(skills: Array<Skill>): void {
        this.skills = skills;
    }

    public addSkill(skill: Skill): void {
        this.skills.push(skill);
    }
}

export { SkillsSection };