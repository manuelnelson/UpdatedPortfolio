import {Role} from "./role.model";
import {Technology} from "./technology.model";
export interface Work {
    name: string;
    client: string;
    company: string;
    roles: Array<Role>;
    technologies: Array<Technology>;
    image: {
        url:string;
    };
    required: boolean;
    link: string;
    content: {
        brief: string;
        extended: string;
    };
}
