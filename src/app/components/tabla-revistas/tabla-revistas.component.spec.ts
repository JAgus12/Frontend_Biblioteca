import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRevistasComponent } from './tabla-revistas.component';

describe('TablaRevistasComponent', () => {
  let component: TablaRevistasComponent;
  let fixture: ComponentFixture<TablaRevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaRevistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
