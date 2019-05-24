import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-alart-snackbar',
  templateUrl: './alart-snackbar.component.html',
  styleUrls: ['./alart-snackbar.component.css']
})
export class AlertSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
