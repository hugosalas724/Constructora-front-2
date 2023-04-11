import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NombreDeLaTareaPage } from './nombre-de-la-tarea.page';

describe('NombreDeLaTareaPage', () => {
  let component: NombreDeLaTareaPage;
  let fixture: ComponentFixture<NombreDeLaTareaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreDeLaTareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NombreDeLaTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
