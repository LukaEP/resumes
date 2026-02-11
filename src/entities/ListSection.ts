import { Section } from "./Section";
import { SectionTitles } from "../enums/SectionTitles";

class ListSection<Type> implements Section {
    title: SectionTitles;
    private list: Array<Type>;

    public constructor(title: SectionTitles, list: Array<Type>) {
        this.title = title;
        this.list = list;
    }

    public getValue(): Array<Type> {
        return this.list;
    }

    public setList(list: Array<Type>): void {
        this.list = list;
    }

    public addItem(item: Type): void {
        this.list.push(item);
    }

    public removeItem(index: number): boolean {
        if (this.list.splice(index)) {
            return true;
        }

        return false;
    }
}

export { ListSection };