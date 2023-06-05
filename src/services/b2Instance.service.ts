import 'dotenv/config';
import B2 from 'backblaze-b2';

export const b2Instance = async (
  applicationKeyID: string,
  applicationKey: string
) => {
  const b2 = new B2({
    applicationKeyId: applicationKeyID,
    applicationKey: applicationKey
  });

  await b2.authorize();

  console.log(b2);
  return b2;
};
