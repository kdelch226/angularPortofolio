import { Tech } from "./Tech";

export interface Project {
    id:number;
    name: string;
    summary:string;
    description: string;
    pictures:string[];
    tech:Tech[];
}