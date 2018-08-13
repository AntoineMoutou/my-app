import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoBabylonComponent } from './proto-babylon.component';

describe('ProtoBabylonComponent', () => {
  let component: ProtoBabylonComponent;
  let fixture: ComponentFixture<ProtoBabylonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoBabylonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoBabylonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
