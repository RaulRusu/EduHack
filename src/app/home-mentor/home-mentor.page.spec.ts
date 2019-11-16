import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMentorPage } from './home-mentor.page';

describe('HomeMentorPage', () => {
  let component: HomeMentorPage;
  let fixture: ComponentFixture<HomeMentorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMentorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMentorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
