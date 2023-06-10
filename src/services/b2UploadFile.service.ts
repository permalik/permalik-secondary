import fs from 'fs';
import { b2GetUploadUrl, b2Instance } from '.';
import { B2Config } from '../config';

export const b2UploadFile = async () => {
  const b2 = await b2Instance(B2Config);
  const { uploadUrl, authorizationToken } = await b2GetUploadUrl(B2Config);

  const file = fs.readFileSync('./1.md');

  const source = Buffer.from(file);

  const response = await b2.uploadFile({
    uploadUrl: uploadUrl,
    uploadAuthToken: authorizationToken,
    fileName: '1.md',
    mime: 'text/markdown',
    data: source,
    info: {
      color: 'blue'
    }
  });

  console.log(response);

  return response;
};
