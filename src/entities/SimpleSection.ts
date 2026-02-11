import { Section } from "./Section";
import { SectionTitles } from "../enums/SectionTitles";

class SimpleSection<Type> implements Section{
    title: SectionTitles;
    private value: Type;

    public constructor(title: SectionTitles, value: Type) {
        this.title = title;
        this.value = value;
    }

    public getValue(): Type {
        return this.value;
    }

    public setValue(value: Type): void {
        this.value = value;
    }
}

export { SimpleSection };