import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoSatListComponent } from './proto-sat-list.component';

describe('ProtoSatListComponent', () => {
  let component: ProtoSatListComponent;
  let fixture: ComponentFixture<ProtoSatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoSatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoSatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
