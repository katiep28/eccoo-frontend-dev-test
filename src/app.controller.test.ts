import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  describe('homepage', () => {
    it('should set the welcome message for the homepage', () => {
      expect(appController.getHomepage()).toHaveProperty('message', 'Welcome to the Equal Care Co-op test app');
    });

    it('should set the page links', () => {
      expect(appController.getHomepage()).toHaveProperty('links');
    });
  });

  describe('frontend', () => {
    const query = { name: 'TEST NAME' };
  
    it('should pass the query parameter through', () => {
      expect(appController.getFrontend(query)).toHaveProperty('query', query);
    });

    it('should set the page links', () => {
      expect(appController.getFrontend(query)).toHaveProperty('links');
    });
  });

  describe('backend', () => {
    it('should call the backend service', async () => {
      expect(await appController.getBackend()).toHaveProperty('data', 'ASYNC BACKEND DATA')
    });

    it('should set the page links', async () => {
      expect(await appController.getBackend()).toHaveProperty('links');
    });
  });

  /**
   * Mocks up the controller to make it testable
   */
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).overrideProvider(AppService).useValue({
      getBackendData: jest.fn().mockResolvedValue('ASYNC BACKEND DATA'),
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
