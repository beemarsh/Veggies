import {launchCamera} from 'react-native-image-picker';


export async function onScanPress() {
  const result = await launchCamera({
    mediaType: 'photo',
    selectionLimit: 1,
  });

  console.log(result);

  return result;
}
