import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEngComponent } from './chat-eng.component';

describe('ChatEngComponent', () => {
  let component: ChatEngComponent;
  let fixture: ComponentFixture<ChatEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
