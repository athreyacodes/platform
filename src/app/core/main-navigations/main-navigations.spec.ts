import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigations } from './main-navigations';

describe('MainNavigations', () => {
  let component: MainNavigations;
  let fixture: ComponentFixture<MainNavigations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNavigations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavigations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
