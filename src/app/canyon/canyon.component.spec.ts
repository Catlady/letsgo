import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanyonComponent } from './canyon.component';

describe('CanyonComponent', () => {
  let component: CanyonComponent;
  let fixture: ComponentFixture<CanyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanyonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
