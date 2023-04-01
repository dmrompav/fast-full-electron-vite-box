import { LoadingController } from '../app/controllers/LoadingController';
import { Router } from '../app/core/router';

export const router = new Router()
  .on('removeLoading', LoadingController.removeLoading);
