import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoThreeComponent } from './proto-three.component';

describe('ProtoThreeComponent', () => {
  let component: ProtoThreeComponent;
  let fixture: ComponentFixture<ProtoThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
