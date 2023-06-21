// import { getDownloadURL, uploadString } from 'firebase/storage';
import Resizer from 'react-image-file-resizer';

// import { storageImageRef } from '@/services';

export const resizeFile = (file: Blob) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64',
    );
  });

export const convertBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export async function convertUrlToFile({
  url,
  name = 'file.jpeg',
}: {
  url: string;
  name?: string;
}) {
  const response = await fetch(url);
  const data = await response.blob();
  const file = new File([data], name, {
    type: 'image/jpeg',
  });

  return file;
}

// export async function getUrlImage({ file, ref }: { file: Blob; ref?: string }) {
//   const result = (await resizeFile(file)) as string;
//   const imageRef = storageImageRef(ref);
//   const upload = await uploadString(
//     imageRef,
//     result.replace('data:image/jpeg;base64,', ''),
//     'base64',
//   );
//   const url = await getDownloadURL(upload.ref);
//   return url;
// }
