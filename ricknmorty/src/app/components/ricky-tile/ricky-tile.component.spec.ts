import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickyTileComponent } from './ricky-tile.component';

describe('RickyTileComponent', () => {
  let component: RickyTileComponent;
  let fixture: ComponentFixture<RickyTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickyTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
