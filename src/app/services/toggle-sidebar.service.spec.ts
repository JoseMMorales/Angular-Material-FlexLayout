import { TestBed } from '@angular/core/testing';

import { ToggleSidebarService } from './toggle-sidebar.service';

describe('ToggleSidebarService', () => {
  let service: ToggleSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
