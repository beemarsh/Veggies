import firebase_admin
from fastapi import FastAPI
from firebase_admin import credentials
from firebase_admin import auth

from pydantic import BaseModel

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
