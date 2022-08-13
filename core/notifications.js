import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';

export const installToken = async ({uid}) => {
  try {
    const token = await messaging().getToken();

    await saveTokenToDatabase({token: token, uid: uid});
  } catch (error) {
    if (__DEV__) console.log(error);
  }
};

// Add the token to the users datastore
export const saveTokenToDatabase = async ({token, uid}) => {
  await firestore()
    .collection('FCMTokens')
    .doc(uid)
    .set(
      {
        token: firestore.FieldValue.arrayUnion(token),
      },
      {merge: true},
    );
};

export const deleteToken = async ({uid, token}) => {
  try {
    await messaging().deleteToken();
    await firestore()
      .collection('FCMTokens')
      .doc(uid)
      .update({
        token: firestore.FieldValue.arrayRemove(token),
      });
  } catch (error) {
    if (__DEV__) console.log(error);
  }
};

export const createNotificationChannels = () => {
  // Check if the channel already exists
  // If it doesnt exist then create the channel

  PushNotification.channelExists('users', exists => {
    if (!exists) {
      PushNotification.createChannel({
        channelId: 'universal',
        channelName: 'Users Notification',
        channelDescription:
          'Channel at user end that recieves messages from ADMIN and SUPER ADMINS',
        playSound: true,
        importance: Importance.HIGH,
        vibrate: true,
      });
    }
  });
};
