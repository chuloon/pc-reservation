import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPromptComponent } from './creation-prompt.component';

describe('CreationPromptComponent', () => {
  let component: CreationPromptComponent;
  let fixture: ComponentFixture<CreationPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit button click', () => {
    
  });
});
