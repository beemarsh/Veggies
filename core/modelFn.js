import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {useFormik} from 'formik';
import RNFetchBlob from 'rn-fetch-blob';

import {server} from './server';

import {NavigationRef} from '../routes/Route';

export async function onScanPress() {
  try {
    const result = await launchCamera({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    console.log(result);

    let our_data = result.assets[0];

    NavigationRef.navigate('DISEASE', {assets: our_data});
  } catch (error) {
    console.log(error);
  }
}
