import { SectionTypeEnum } from "./SectionTypeEnum";

class Section {
    private type: SectionTypeEnum;

    public constructor(type: SectionTypeEnum) {
        this.type = type;
    }

    public getType(): SectionTypeEnum {
        return this.type;
    }

    public setType(type: SectionTypeEnum): void {
        this.type = type;
    }
}

export { Section };