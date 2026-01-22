class Section<Type> {
    private value: Type;

    public constructor(value: Type) {
        this.value = value;
    }

    public getValue(): Type {
        return this.value;
    }

    public setValue(value: Type): void {
        this.value = value;
    }
}

export { Section };