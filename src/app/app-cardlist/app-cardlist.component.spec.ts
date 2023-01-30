import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardlistComponent } from './app-cardlist.component';

describe('AppCardlistComponent', () => {
  let component: AppCardlistComponent;
  let fixture: ComponentFixture<AppCardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
