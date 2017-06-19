import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoTrabalhoComponent } from './permissao-trabalho.component';

describe('PermissaoTrabalhoComponent', () => {
  let component: PermissaoTrabalhoComponent;
  let fixture: ComponentFixture<PermissaoTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
