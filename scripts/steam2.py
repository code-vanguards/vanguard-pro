import requests
import os
import time
import datetime

query = 'https://steamcommunity.com/id/mrbru3'

response = requests.get(query)

print(response)
print(response.text)

result = open("result.html", "a")
result.write(str(response.text))
result.close()

time.sleep(10)

test = open(str(datetime.datetime.now()) + '.txt', "a")
test.close()

os.system('sudo mv /home/pi/result.html /var/www/html/hackathon/')
