import numpy as np
import matplotlib.pyplot as plt

from skimage.transform import resize
import cv2
import tensorflow as tf
import tensorflow_datasets as tfds
import tensorflow_hub as hub

# dataset, info = tfds.load('cassava', with_info=True)
# Extend the cassava dataset classes with 'unknown'
# class_names = info.features['label'].names + ['unknown']

# Map the class names to human readable names
name_map = dict(
    cmd='Mosaic Disease',
    cbb='Bacterial Blight',
    cgm='Green Mite',
    cbsd='Brown Streak Disease',
    healthy='Healthy',
    unknown='Unknown')

# print(dataset)
# print(len(class_names), 'classes:')
# print(class_names)
# print([name_map[name] for name in class_names])


# def preprocess_fn(data):
#   image = data['image']

#   # Normalize [0, 255] to [0, 1]
#   image = tf.cast(image, tf.float32)
#   image = image / 255.

#   # Resize the images to 224 x 224
#   image = tf.image.resize(image, (224, 224))

#   data['image'] = image
#   return data

# img = tf.io.read_file("test-img-1.jpg")
# tensor = tf.io.decode_image(img, channels=3, dtype=tf.dtypes.float32)
# tensor = tensor/255
# tensor = tf.image.resize(tensor, [224, 224])
# input_tensor = tf.expand_dims(tensor, axis=0)
img = cv2.imread('test-img-1.jpg')
img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
img = resize(img, (224, 224,3))
input_tensor = img.reshape(1,224,224,3)


classifier = hub.KerasLayer('cropnet')
probabilities = classifier(input_tensor)
prediction = int(tf.argmax(probabilities, axis=-1))

print(prediction)

if prediction == 0:
    print('Mosaic Disease')
elif prediction == 1:
    print('Bacterial Blight')
elif prediction == 2:
    print('Green Mite')
elif prediction == 3:
    print('Brown Streak Disease')
elif prediction == 4:
    print('Healthy')
else:
    print('Unknown')