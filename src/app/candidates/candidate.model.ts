export class Candidate {
    public name: string;
    public projects: Project[];

    constructor(name: string, projects: Project[]) {
        this.name = name;
        this.projects = projects;
    }
}

export class Project {
    public name: string;
    public year: number;
    public skills: string[];

    constructor(name: string, year: number, skills: string[]) {
        this.name = name;
        this.year = year;
        this.skills = skills;
    }
}
