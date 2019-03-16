import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanyonListComponent } from './canyon-list.component';

describe('CanyonListComponent', () => {
  let component: CanyonListComponent;
  let fixture: ComponentFixture<CanyonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanyonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanyonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
