import { SectionTitles } from "../enums/SectionTitles";

interface Section {
    title: SectionTitles;

    getValue(): unknown;

    toJSON();
}

export { Section }