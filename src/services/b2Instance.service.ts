import 'dotenv/config';
import B2 from 'backblaze-b2';

export const b2Instance = async () => {
  const b2 = new B2({
    applicationKeyId: process.env.APPLICATION_KEY_ID as string,
    applicationKey: process.env.APPLICATION_KEY as string
  });

  await b2.authorize();

  console.log(b2);
  return b2;
};

b2Instance();
