import { Router } from 'express';
import {
  createUser,
  deleteUserById,
  findUsers,
  updateUserById,
} from '../controllers/user';

export const userRouter = Router();
userRouter
  .post('/', createUser as any)
  .get('/find', findUsers as any)
  .put('/:id', updateUserById as any)
  .delete('/:id', deleteUserById as any);
