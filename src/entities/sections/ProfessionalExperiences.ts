import { Section } from "../Section";

import { SectionTypeEnum } from "../../enums/SectionTypeEnum";

import { Role } from "../../@types/Role";

class ProfessionalExperiencesSection extends Section {
    private roles: Array<Role>;

    public constructor(sectionType: SectionTypeEnum,
        roles: Array<Role>
    ) {
        super(sectionType);
        this.roles = roles;
    }

    public getRoles(): Array<Role> {
        return this.roles;
    }

    public setRoles(roles: Array<Role>): void {
        this.roles = roles;
    }

    public addRole(role: Role): void {
        this.roles.push(role);
    }

    public searchRoleByCompanyName(companyName: string): Role {
        return this.roles.find((role) => {
            if (role.companyName == companyName) {
                return role;
            }
        });
    }
}

export { ProfessionalExperiencesSection }