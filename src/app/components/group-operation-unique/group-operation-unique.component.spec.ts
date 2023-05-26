import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOperationUniqueComponent } from './group-operation-unique.component';

describe('GroupOperationUniqueComponent', () => {
  let component: GroupOperationUniqueComponent;
  let fixture: ComponentFixture<GroupOperationUniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOperationUniqueComponent]
    });
    fixture = TestBed.createComponent(GroupOperationUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
