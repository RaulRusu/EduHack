import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeUserPage } from './home-user.page';

describe('HomeUserPage', () => {
  let component: HomeUserPage;
  let fixture: ComponentFixture<HomeUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
