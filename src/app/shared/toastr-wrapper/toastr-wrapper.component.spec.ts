import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrWrapperComponent } from './toastr-wrapper.component';

describe('ToastrWrapperComponent', () => {
  let component: ToastrWrapperComponent;
  let fixture: ComponentFixture<ToastrWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
