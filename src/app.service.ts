import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * This returns a *Promise* to mimic a call to a backend service.
   */
  getBackendData(): Promise<{ name: string; role?: string; }[]> {
    return Promise.resolve([
      {
        name: 'Person 1',
        role: 'Care Co-ordinator',
      },
      {
        name: 'Person 2',
      }
    ]);
  }
}
