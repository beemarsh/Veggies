import joblib
loaded_model = joblib.load('Crop Suggestion.joblib')

result = loaded_model.predict([[90,42,43,20.8797,75,5.5,220]])
print(result)