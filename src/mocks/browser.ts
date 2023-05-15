import { setupWorker } from 'msw';
import { handlers } from './handlers';

// create worker instance with our request handlers
export const worker = setupWorker(...handlers);
