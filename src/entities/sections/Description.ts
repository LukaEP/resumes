import { Section } from "../Section";
import { SectionTypeEnum } from "../../enums/SectionTypeEnum";

class DescriptionSection extends Section {
    private selfDescription: string;

    public constructor(type: SectionTypeEnum, selfDescription: string) {
        super(type);
        this.selfDescription = selfDescription;
    }

    public getDescription(): string {
        return this.selfDescription;
    }

    public setDescription(selfDescription: string): void {
        this.selfDescription = selfDescription;
    }
}

export { DescriptionSection };