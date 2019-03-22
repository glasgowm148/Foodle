import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealEditComponent } from './deal-edit.component';

describe('DealEditComponent', () => {
  let component: DealEditComponent;
  let fixture: ComponentFixture<DealEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
