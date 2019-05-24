import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSnackbarComponent } from './alart-snackbar.component';

describe('AlartSnackbarComponent', () => {
  let component: AlertSnackbarComponent;
  let fixture: ComponentFixture<AlertSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
