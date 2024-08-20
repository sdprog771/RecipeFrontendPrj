import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyRecipeComponent } from './admin-modify-recipe.component';

describe('AdminModifyRecipeComponent', () => {
  let component: AdminModifyRecipeComponent;
  let fixture: ComponentFixture<AdminModifyRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminModifyRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
