import { Section } from "../Section";
import { SectionTypeEnum } from "../SectionTypeEnum";

class PersonaSection extends Section {
    private name: string;
    private email: string;
    private phone: string;
    private address: string;
    private linkedin: string;
    private photo: string;

    public constructor (type: SectionTypeEnum,
        name: string,
        email: string,
        phone: string,
        address: string,
        linkedin: string,
        photo: string
    ) {
        super(type);
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.linkedin = linkedin;
        this.photo = photo;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(value: string): void {
        this.email = value;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(value: string): void {
        this.phone = value;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(value: string): void {
        this.address = value;
    }

    public getLinkedin(): string {
        return this.linkedin;
    }

    public setLinkedin(value: string): void {
        this.linkedin = value;
    }

    public getPhoto(): string {
        return this.photo;
    }

    public setPhoto(value: string): void {
        this.photo = value;
    }
}

export { PersonaSection };