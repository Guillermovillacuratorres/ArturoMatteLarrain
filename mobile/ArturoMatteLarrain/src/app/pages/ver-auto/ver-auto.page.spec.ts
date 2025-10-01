import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAutoPage } from './ver-auto.page';

describe('VerAutoPage', () => {
  let component: VerAutoPage;
  let fixture: ComponentFixture<VerAutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
