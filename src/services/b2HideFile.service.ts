import { B2Config } from '../config';
import { b2Instance } from '.';

export const b2HideFile = async (fileName: string) => {
  const b2 = await b2Instance(B2Config);

  const response = await b2.hideFile({
    bucketId: B2Config.bucketID,
    fileName: fileName
  });

  return response;
};
