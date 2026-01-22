class ListSection<Type> {
    private list: Array<Type>;

    public constructor(list: Array<Type>) {
        this.list = list;
    }

    public getList(): Array<Type> {
        return this.list;
    }

    public setList(list: Array<Type>): void {
        this.list = list;
    }

    public addItem(item: Type): void {
        this.list.push(item);
    }
}

export { ListSection };