import requests

url = "http://185.240.104.121:8000/send_sms/"
data = {"number": 11111111, "sms_count": 5}

response = requests.post(url, json=data)

print(response.json())  # Sonucu yazdır
