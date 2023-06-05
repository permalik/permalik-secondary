import { B2Config } from '../config';
import { b2Instance } from './b2Instance.service';
import { B2Props } from '@/types';

export const b2GetUploadUrl = async (params: B2Props) => {
  const b2 = await b2Instance(B2Config);

  const response = await b2.getUploadUrl({
    bucketId: params.bucketID
  });

  const result = response.data;

  return result;
};
