import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesAndSalariesComponent } from './names-and-salaries.component';

describe('NamesAndSalariesComponent', () => {
  let component: NamesAndSalariesComponent;
  let fixture: ComponentFixture<NamesAndSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesAndSalariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamesAndSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
