import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Candidate, Project } from '../candidate.model';
import { CandidatesService } from '../candidates.service';
import { AlertSnackbarComponent } from 'src/app/common/alart-snackbar/alart-snackbar.component';

@Component({
  selector: 'app-candidate-dialog',
  templateUrl: './candidate-dialog.component.html',
  styleUrls: ['./candidate-dialog.component.css']
})
export class CandidateDialogComponent implements OnInit {
  candidate: Candidate;

  candidateName: string;
  projectName: string;
  projectYear: string;
  projectSkills: string;

  constructor(private dialogRef: MatDialogRef<CandidateDialogComponent>, @Inject(MAT_DIALOG_DATA) public data, private candidatesService: CandidatesService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    if (
      this.candidateName == null ||
      this.projectName == null ||
      this.projectYear == null ||
      this.projectSkills == null
    ) {
      this.snackBar.openFromComponent(AlertSnackbarComponent, {
        data: {
          message: 'Please enter all information!'
        }
      });
    } else {
      let skills = this.projectSkills.split(",");
      this.candidate = new Candidate(this.candidateName, [new Project(this.projectName, parseInt(this.projectYear), skills)]);
      this.candidatesService.createCandidate(this.candidate).subscribe(response => {
        if (response.status == 201) {
          this.snackBar.openFromComponent(AlertSnackbarComponent, {
            data: {
              message: 'Project is added'
            }
          });

          this.dialogRef.close();
        }
      }, err => {
        this.snackBar.openFromComponent(AlertSnackbarComponent, {
          data: {
            message: 'Error!'
          }
        });
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
