import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrounddetailComponent } from './grounddetail.component';

describe('GrounddetailComponent', () => {
  let component: GrounddetailComponent;
  let fixture: ComponentFixture<GrounddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrounddetailComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrounddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
