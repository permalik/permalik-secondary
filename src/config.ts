import 'dotenv/config';
import { B2Props } from './types';

export const B2Config: B2Props = {
  applicationKeyID: process.env.APPLICATION_KEY_ID as string,
  applicationKey: process.env.APPLICATION_KEY as string,
  bucketID: process.env.BUCKET_ID as string
};
