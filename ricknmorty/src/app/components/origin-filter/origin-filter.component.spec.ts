import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginFilterComponent } from './origin-filter.component';

describe('OriginFilterComponent', () => {
  let component: OriginFilterComponent;
  let fixture: ComponentFixture<OriginFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
