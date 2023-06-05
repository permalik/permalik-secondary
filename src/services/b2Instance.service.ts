import B2 from 'backblaze-b2';
import { B2Props } from '@/types';

export const b2Instance = async ({
  applicationKeyID,
  applicationKey
}: B2Props) => {
  const b2 = new B2({
    applicationKeyId: applicationKeyID,
    applicationKey: applicationKey
  });

  await b2.authorize();

  console.log(b2);
  return b2;
};
