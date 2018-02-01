import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgtreporterviewComponent } from './cgtreporterview.component';

describe('CgtreporterviewComponent', () => {
  let component: CgtreporterviewComponent;
  let fixture: ComponentFixture<CgtreporterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgtreporterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgtreporterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
