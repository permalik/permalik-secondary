import { B2Config } from '../config';
import { b2Instance } from '.';

export const b2DeleteFileVersion = async (fileID: any, fileName: any) => {
  const b2 = await b2Instance(B2Config);

  const response = await b2.deleteFileVersion({
    fileId: fileID,
    fileName: fileName
  });

  console.log(response);

  return response;
};
