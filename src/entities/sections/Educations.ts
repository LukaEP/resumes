import { Section } from "../Section";

import { SectionTypeEnum } from "../../enums/SectionTypeEnum";

import { Education } from "../../@types/Education";

class EducationsSection extends Section {
    private educations: Array<Education>;
    
    public constructor(sectionType: SectionTypeEnum,
        educations: Array<Education>
    ) {
        super(sectionType);
        this.educations = educations;
    }

    public getEducations(): Array<Education> {
        return this.educations;
    }

    public setEducations(educations: Array<Education>): void {
        this.educations = educations;
    }

    public addEducation(education: Education): void {
        this.educations.push(education);
    }
}

export { EducationsSection };