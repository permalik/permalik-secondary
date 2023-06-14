import { b2ListFileNames } from '../services';
import { RequestHandler } from 'express';

export const getAllPosts: RequestHandler = async (req, res, next) => {
  const posts = await b2ListFileNames('44a34cfffb52eb97847e0f17');

  console.log(posts);

  return res.status(200).json({ message: 'OK', posts });
};

export const uploadPost: RequestHandler = async (req, res, next) => {
  const { file } = req.body;

  console.log(file);

  return res.status(200).json({ message: 'OK', file });
};
