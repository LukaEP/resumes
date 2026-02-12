import { Section } from "./Section";

class Resume {
    private sections: Array<Section>;

    public constructor(sections: Array<Section>) {
        this.sections = sections;
    }

    public getSections(): Array<Section> {
        return this.sections;
    }

    public setSections(sections: Array<Section>): void {
        this.sections = sections;
    }

    public addSection(section: Section): void {
        this.sections.push(section);
    }

    public toJSON() {
        return this.sections.map((section) => {
            return section.toJSON();
        });
    }
}

export { Resume };