import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunuLateralComponent } from './munu-lateral.component';

describe('MunuLateralComponent', () => {
  let component: MunuLateralComponent;
  let fixture: ComponentFixture<MunuLateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunuLateralComponent]
    });
    fixture = TestBed.createComponent(MunuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
