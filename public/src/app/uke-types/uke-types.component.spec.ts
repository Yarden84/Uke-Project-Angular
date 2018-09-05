import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkeTypesComponent } from './uke-types.component';

describe('UkeTypesComponent', () => {
  let component: UkeTypesComponent;
  let fixture: ComponentFixture<UkeTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkeTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
