import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPictureComponent } from './random-picture.component';

describe('RandomPictureComponent', () => {
  let component: RandomPictureComponent;
  let fixture: ComponentFixture<RandomPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
