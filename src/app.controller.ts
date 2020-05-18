import { Controller, Get, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';

const links = {
  Home: '/',
  Frontend: '/frontend',
  Backend: '/backend',
};

/**
 * The page controllers Render the specified view templates
 * providing the data returned by the class method.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Homepage
   */
  @Get()
  @Render('page')
  getHomepage() {
    return {
      links,
      message: 'Welcome to the Equal Care Co-op test app',
    };
  }
  /**
   * Frontend
   */
  @Get('frontend')
  @Render('page-frontend')
  getFrontend(@Query() query) {
    return {
      links,
      query: query,
    };
  }
  /**
   * Backend page
   */
  @Get('backend')
  @Render('page-backend')
  async getBackend() {
    /**
     * The backend service should return an array of BackendData
     *         BackendData[] is the Type Definition
     */
    const data = await this.appService.getBackendData();
    return {
      links,
      data,
    };
  }
}
