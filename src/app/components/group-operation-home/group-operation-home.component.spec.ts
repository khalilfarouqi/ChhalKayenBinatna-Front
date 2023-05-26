import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOperationHomeComponent } from './group-operation-home.component';

describe('GroupOperationHomeComponent', () => {
  let component: GroupOperationHomeComponent;
  let fixture: ComponentFixture<GroupOperationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOperationHomeComponent]
    });
    fixture = TestBed.createComponent(GroupOperationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
