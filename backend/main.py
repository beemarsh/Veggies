import firebase_admin
from fastapi import FastAPI, File, UploadFile
from firebase_admin import credentials
from firebase_admin import auth

from pydantic import BaseModel


from skimage.transform import resize
import cv2
import tensorflow as tf
import tensorflow_hub as hub
import joblib
app = FastAPI()

cred = credentials.Certificate('keys.json')
firebase_admin.initialize_app(cred)


class User(BaseModel):
    name: str
    email : str
    password : str
    phone_number : str


@app.post("/signup")
async def signup(user: User):
    u = auth.create_user(email = user.email, password = user.password, display_name=user.name, phone_number=user.phone_number,)
    


    # print("User created successfully : {0}".format(user.uid))
    return u.uid


@app.post("/disease-detection")
async def disease_detection(img : UploadFile):
    with open('temp.jpg', 'wb') as f:
        # [f.write(chunk) for chunk in iter(lambda: img.file.read(10000), b'')]
        f.write(img.file.read())
        f.close()
    img = cv2.imread('temp.jpg')
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    img = resize(img, (224, 224,3))
    input_tensor = img.reshape(1,224,224,3)


    classifier = hub.KerasLayer('cropnet')
    probabilities = classifier(input_tensor)
    prediction = int(tf.argmax(probabilities, axis=-1))

    print(prediction)

    if prediction == 0:
        print('Mosaic Disease')
        return {'disease':'Mosaic Disease'}
    elif prediction == 1:
        print('Bacterial Blight')
        return {'disease':'Bacterial Blight'}
    elif prediction == 2:
        print('Green Mite')
        return {'disease':'Green Mite'}
    elif prediction == 3:
        print('Brown Streak Disease')
        return {'disease':'Brown Streak Disease'}
    elif prediction == 4:
        print('Healthy')
        return {'disease':'Healthy'}
    else:
        print('Unknown')
        return {'disease':'Unknown'}

@app.get('/crop-suggestion')
async def crop(N:float, P:float, K:float, temp:float, humidity:float, pH:float, rain: float):
    loaded_model = joblib.load('Crop Suggestion.joblib')

    result = loaded_model.predict([[N,P,K,temp,humidity,pH,rain]])
    return {"suggestions": result}