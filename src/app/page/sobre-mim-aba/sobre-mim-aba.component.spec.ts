import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMimAbaComponent } from './sobre-mim-aba.component';

describe('SobreMimAbaComponent', () => {
  let component: SobreMimAbaComponent;
  let fixture: ComponentFixture<SobreMimAbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMimAbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMimAbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
