import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Candidate } from './candidate.model';

@Injectable()
export class CandidatesService {
    url: string = "http://192.168.7.178:8080";
    constructor(private http: Http) { }

    getCandidatesBySkills(skills: string) {
        // let params = new URLSearchParams();
        // params.append("skills", skills);
        return this.http.get(`${this.url}/v1/candidates?skills=${skills}`);
    }

    createCandidate(candidate: Candidate) {
        return this.http.post(`${this.url}/v1/candidates`, {
            name: candidate.name,
            project: candidate.projects[0].name,
            year: candidate.projects[0].year,
            skills: candidate.projects[0].skills.toString()
        });
    }
}
