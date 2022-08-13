import requests

endpoint = "https://api.openweatgermap.org/weather"

res = requests.get(endpoint, params={"lat": lat, "lon": lon, "appid":"f2b0e2e973c343762eacc9d895778393"})