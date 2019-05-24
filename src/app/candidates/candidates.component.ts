import { Component, OnInit } from '@angular/core';
import { Candidate, Project } from './candidate.model';
import { MatDialog, MatSnackBar } from '@angular/material';

import { CandidateDialogComponent } from './candidate-dialog/candidate-dialog.component';

import { CandidatesService } from './candidates.service';
import { AlertSnackbarComponent } from '../common/alart-snackbar/alart-snackbar.component';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  dataSource: Candidate[] = [];
  skills: string;

  constructor(private candidatesService: CandidatesService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSearchCandidate() {
    this.candidatesService.getCandidatesBySkills(this.skills).subscribe(response => {
      if (response.status == 200) {
        const body = response.json();

        if (body.length == 0) {
          this.snackBar.openFromComponent(AlertSnackbarComponent, {
            data: {
              message: 'No candidate matched!'
            }
          });
        } else {
          this.dataSource = [];
          for (const candidate of body) {

            let projects = [];
            for (const project of candidate.projects) {
              projects.push(new Project(project.name, project.year, project.skills));
            }

            this.dataSource.push(new Candidate(candidate.name, projects));
          }
        }
      }
    }, err => {
      if (err.status == 400) {
        this.snackBar.openFromComponent(AlertSnackbarComponent, {
          data: {
            message: 'Invalid input!'
          }
        });
      } else {
        this.snackBar.openFromComponent(AlertSnackbarComponent, {
          data: {
            message: 'Error!'
          }
        });
      }
    });
  }

  onAddCandidate() {
    const dialogRef = this.dialog.open(CandidateDialogComponent);
  }

}
