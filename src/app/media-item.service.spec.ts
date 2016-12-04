/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaItemService } from './media-item.service';

describe('MediaItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaItemService]
    });
  });

  it('should ...', inject([MediaItemService], (service: MediaItemService) => {
    expect(service).toBeTruthy();
  }));
});
