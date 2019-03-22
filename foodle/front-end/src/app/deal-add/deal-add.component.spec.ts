import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealAddComponent } from './deal-add.component';

describe('DealAddComponent', () => {
  let component: DealAddComponent;
  let fixture: ComponentFixture<DealAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
