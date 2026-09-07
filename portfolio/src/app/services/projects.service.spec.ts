import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { appConfig } from '../app.config';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ...appConfig.providers
      ]
    });

    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});