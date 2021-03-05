import { Test, TestingModule } from '@nestjs/testing';
import { WorkingHoursService } from './working-hours.service';

describe('WorkingHoursService', () => {
  let service: WorkingHoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingHoursService],
    }).compile();

    service = module.get<WorkingHoursService>(WorkingHoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
