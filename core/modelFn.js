import {launchCamera} from 'react-native-image-picker';

import {server} from './server';

export async function onScanPress() {
  const result = await launchCamera({
    mediaType: 'photo',
    selectionLimit: 1,
  });

  console.log(result);

  let our_data = result.assets[0];
  let body = new FormData();

  body.append('image', {
    uri: our_data['uri'],
    name: our_data['fileName'],
    type: our_data['type'],
  });

  const request = await fetch(server.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: body,
  });

  const json = await request.json();

  console.log(json);

  return result.assets[0];
}
