import { B2Config } from '../config';
import { b2Instance } from '.';

export const b2ListFileNames = async (bucketID: string) => {
  const b2 = await b2Instance(B2Config);

  const response = await b2.listFileNames({
    bucketId: bucketID,
    startFileName: '',
    maxFileCount: 10000,
    delimiter: '',
    prefix: ''
  });

  const result = response.data.files;

  console.log(result);
  return result;
};
