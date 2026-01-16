import { Types } from "../enums/Types";
import { Levels } from "../enums/Levels";
import { Skill } from "./Skill";

type Education = {
    institution: string;
    level: Levels;
    type: Types;
    beggining: Date;
    ending: Date | undefined;
    skillsAcquired: Array<Skill>;
    name: string;
}

export { Education };