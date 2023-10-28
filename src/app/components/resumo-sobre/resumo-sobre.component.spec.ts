import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoSobreComponent } from './resumo-sobre.component';

describe('ResumoSobreComponent', () => {
  let component: ResumoSobreComponent;
  let fixture: ComponentFixture<ResumoSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
