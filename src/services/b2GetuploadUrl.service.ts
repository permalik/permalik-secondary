import { b2Instance } from './b2Instance.service';

export const b2GetUploadUrl = async (bucketID: string) => {
  const b2 = await b2Instance(
    process.env.APPLICATION_KEY_ID as string,
    process.env.APPLICATION_KEY as string
  );

  const response = await b2.getUploadUrl({
    bucketId: bucketID
  });

  const result = response.data;

  console.log(result);
  return result;
};

b2GetUploadUrl(process.env.BUCKET_ID as string);
