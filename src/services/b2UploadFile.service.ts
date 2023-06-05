import { b2GetUploadUrl, b2Instance } from '.';
import { B2Config } from '../config';

export const b2UploadFile = async () => {
  const b2 = await b2Instance(B2Config);
  const { uploadUrl, authorizationToken } = await b2GetUploadUrl(B2Config);

  const thing = Buffer.from('hello world', 'utf-8');

  const response = await b2.uploadFile({
    uploadUrl: uploadUrl,
    uploadAuthToken: authorizationToken,
    fileName: 'test.txt',
    mime: 'text/plain',
    data: thing,
    info: {
      color: 'blue'
    }
  });

  console.log(response);

  return response;
};

b2UploadFile();
