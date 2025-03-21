import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdetailsComponent } from './pdetails.component';

describe('PdetailsComponent', () => {
  let component: PdetailsComponent;
  let fixture: ComponentFixture<PdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
