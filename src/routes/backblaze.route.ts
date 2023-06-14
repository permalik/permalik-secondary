import { getAllPosts, uploadPost } from '../controllers/backblaze.controller';
import { Request, Response, Router } from 'express';

const backblazeRouter = Router();

backblazeRouter.get('/', getAllPosts);
backblazeRouter.post('/', uploadPost);

export default backblazeRouter;
