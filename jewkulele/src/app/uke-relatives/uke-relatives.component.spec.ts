import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkeRelativesComponent } from './uke-relatives.component';

describe('UkeRelativesComponent', () => {
  let component: UkeRelativesComponent;
  let fixture: ComponentFixture<UkeRelativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkeRelativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkeRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
