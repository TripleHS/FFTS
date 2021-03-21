import { Test, TestingModule } from '@nestjs/testing';
import { WorkingHoursController } from './working-hours.controller';

describe('WorkingHoursController', () => {
  let controller: WorkingHoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingHoursController],
    }).compile();

    controller = module.get<WorkingHoursController>(WorkingHoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
