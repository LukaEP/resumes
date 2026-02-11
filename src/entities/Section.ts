import { SectionTitles } from "../enums/SectionTitles";

interface Section {
    title: SectionTitles;

    getValue(): unknown;
}

export { Section }