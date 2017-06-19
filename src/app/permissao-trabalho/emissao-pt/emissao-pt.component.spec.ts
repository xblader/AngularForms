import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoPTComponent } from './emissao-pt.component';

describe('EmissaoPTComponent', () => {
  let component: EmissaoPTComponent;
  let fixture: ComponentFixture<EmissaoPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissaoPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissaoPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
