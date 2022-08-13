import requests

url = 'http://127.0.0.1:8000/disease-detection'
file = {'img': open('test-img-0.jpg', 'rb')}
resp = requests.post(url=url, files=file) 
print(resp.json())