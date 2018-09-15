import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkeSizesComponent } from './uke-sizes.component';

describe('UkeSizesComponent', () => {
  let component: UkeSizesComponent;
  let fixture: ComponentFixture<UkeSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkeSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkeSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
