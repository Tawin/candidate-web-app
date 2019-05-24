import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatExpansionModule,
  MatTabsModule,
  MatDatepickerModule,
  MatStepperModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CandidateDialogComponent } from './candidates/candidate-dialog/candidate-dialog.component';
import { CandidatesService } from './candidates/candidates.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertSnackbarComponent } from './common/alart-snackbar/alart-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    PageNotFoundComponent,
    CandidateDialogComponent,
    AlertSnackbarComponent
  ],
  entryComponents: [
    CandidateDialogComponent,
    AlertSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [CandidatesService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
